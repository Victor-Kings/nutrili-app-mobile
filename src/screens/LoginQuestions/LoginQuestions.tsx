import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import {
  TextContainer,
  ButtonTouch,
  Title,
  TextButton,
  ContainerButtons,
} from "./styles";
import IconBack from "../../assets/img/iconBackBlue.svg";
import { QuestionsTemplate } from "../../components/QuestionsTemplate/QuestionsTemplate";
import { form } from "../../../__mocks__/form";
import { InsertsCustom } from "./components/InsertsCustom";
import { useAuthContext } from "../../context/authContext";
import {ICurrentQuestionContent,IPayloadUser,IpayloadResponses} from "./LoginQuestions.interface";
import {RegisterDataUserService} from "../../services/RegisterDataUserService/RegisterDataUserService";

export function LoginQuestions({ ...props }: any) {
  const registerDataUserService = new RegisterDataUserService();
  const [startedQuestions, setStartedQuestions] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestionContent, setCurrentQuestionContent] = useState<ICurrentQuestionContent>({
    question: "Vamos fazer algumas perguntas para cadastro",
    previousQuestion:1
  });
  const [payloadResponses, setPayloadResponses] = useState<IpayloadResponses[]|null>(null);
  const [payloadUser, setPayloadUser] = useState<IPayloadUser>({
    isNutricionist: false,
  });
  const [endQuestions, setEndQuestions] = useState(false);
  const { userToken, registeredDatas}: any = useAuthContext();

  const handleOnClick = () => {
    setStartedQuestions(true);
  };

  const selectNextQuestion = (value: string): number => {
    if (currentQuestionContent?.nextQuestion?.condition && value === "yes") {
      return currentQuestionContent.nextQuestion.condition[0];
    }
    if (currentQuestionContent?.nextQuestion?.condition && value === "no") {
      return currentQuestionContent.nextQuestion.condition[1];
    }
    if( currentQuestionContent?.nextQuestion?.next){
      return currentQuestionContent.nextQuestion.next;
    }
    return 1;
  };

  const populateLoginForm = (data: string) => {
    switch (currentQuestion + 1) {
      case 1:
        setPayloadUser({ ...payloadUser, name: data });
        break;
      case 2:
        setPayloadUser({ ...payloadUser, gender: data });
        break;
      case 3:
        setPayloadUser({ ...payloadUser, birth: data });
        break;
    }
  };
  const populateQuestionsForm = (data: string) => {
    if (!payloadResponses) {
      setPayloadResponses([
        {
          idQuestion: currentQuestion,
          answer: data,
        },
      ]);
    } else {
      const responsesAux = payloadResponses.filter(
        (obj: any) => obj.idQuestion !== currentQuestion
      );

      responsesAux.push({
        idQuestion: currentQuestion,
        answer: data,
      });

      setPayloadResponses(responsesAux);
    }
  };

  function handlerSetCurrentQuestion(value: string) {
    if (currentQuestionContent.typeForm == "loginForm") {
      populateLoginForm(value);
    } else {
      populateQuestionsForm(value);
    }
    if (currentQuestion < form.length - 1) {
      let nextQuestion = selectNextQuestion(value);
      setCurrentQuestion(nextQuestion - 1);
    } else {
      setEndQuestions(true);
    }
  }

  const handlerBackQuestion = () => {
    setCurrentQuestion(currentQuestionContent.previousQuestion - 1);
  };

  useEffect(() => {
    setCurrentQuestionContent(form[currentQuestion]);
  }, [startedQuestions, currentQuestion]);

  useEffect(() => {
    if (endQuestions != false) {
      async ()=>{
        await registerDataUserService.sendResponseQuestions(payloadResponses,userToken)
        await registerDataUserService.sendRegisterData(payloadUser,userToken)
        registeredDatas()
      }
    }
  }, [endQuestions]);

  const questionText = (
    <TextContainer>
      <Title>
        {startedQuestions && !endQuestions
          ? currentQuestionContent.question
          : "Vamos fazer algumas perguntas para cadastro"}
      </Title>
    </TextContainer>
  );

  const questionsTemp = startedQuestions ? (
    <View style={{ flex: 1, height: "100%" }}>
      <KeyboardAvoidingView
        behavior={"padding"}
        style={{ height: "99%", width: "100%" }}
        keyboardVerticalOffset={-120}
      >
        <ScrollView style={{ flex: 1, height: "100%", width: "100%" }}>
          <View style={{ flex: 1 }}>
            {questionText}
            <InsertsCustom
              handleOnchange={handlerSetCurrentQuestion}
              content={currentQuestionContent}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  ) : (
      <>
        {questionText}
        <ContainerButtons>
          <ButtonTouch color="#4197E5" onPress={handleOnClick}>
            <TextButton>COMEÇAR</TextButton>
          </ButtonTouch>
        </ContainerButtons>
      </>
    );

  return (
    <QuestionsTemplate
      handler={handlerBackQuestion}
      IconBack={IconBack}
      isActiveBackButton={startedQuestions}
    >
      {endQuestions ? <Text>Fazendo login ... </Text> : questionsTemp}
      {startedQuestions && (
        <View style={{ height: 40, marginTop: "5%", marginBottom: "3%" }}>
          <Text style={{ alignSelf: "center", color: "gray", fontSize: 20 }}>
            Pergunta {currentQuestion + 1}/{form.length}
          </Text>
        </View>
      )}
    </QuestionsTemplate>
  );
}
