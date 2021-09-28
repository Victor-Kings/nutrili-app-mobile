import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import {
  TextContainer,
  ButtonTouch,
  Title,
  TextButton,
  ContainerButtons,
  Container
} from "./styles";
import IconBack from "../../assets/img/iconBackBlue.svg";
import { QuestionsTemplate } from "../../components/QuestionsTemplate/QuestionsTemplate";
import { form } from "../../../__mocks__/form";
import { InsertsCustom } from "../../components/InsertCustom/InsertsCustom";
import { useAuthContext } from "../../context/authContext";
import { ICurrentQuestionContent, IPayloadUser, IpayloadResponses } from "./LoginQuestions.interface";
import { RegisterDataUserService } from "../../services/RegisterDataUserService/RegisterDataUserService";
import { Questions } from "../../components/Questions/Questions";
import { IQuestionParams } from "../../components/Questions/Questions.interface";

export function LoginQuestions({ ...props }: any) {
  const registerDataUserService = new RegisterDataUserService();
  const [startedQuestions, setStartedQuestions] = useState(false);
  const [endQuestions, setEndQuestions] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { registeredDatas }: any = useAuthContext();
  const [payloadResponses, setPayloadResponses] = useState<IpayloadResponses[] | null>(null);
  const [payloadUser, setPayloadUser] = useState<IPayloadUser>({
    isNutricionist: false,
  });
  const [currentQuestionContent, setCurrentQuestionContent] =
  useState<ICurrentQuestionContent>({
    question: "Vamos fazer algumas perguntas para cadastro",
    previousQuestion: 1,
    isLastQuestion: false
  });
  
  const handleOnClickStart = () => {
    setStartedQuestions(true);
  };
  
  const handlerBackQuestion = () => {
    setCurrentQuestion(currentQuestionContent.previousQuestion - 1);
  };

  useEffect(() => {
    if (endQuestions != false) {
      (async () => {
        try {
          await registerDataUserService.sendResponseQuestions(payloadResponses)
          await registerDataUserService.sendRegisterData(payloadUser)
        } catch (error) {
          console.error('Falha no cadastro', error)
        }
        registeredDatas()
      })();
    }
  }, [endQuestions]);

  const paramsQuestions = {
    payloadUser : payloadUser,
    setPayloadUser: setPayloadUser,
    payloadResponses : payloadResponses,
    setPayloadResponses: setPayloadResponses,
    form: form,
    currentQuestion: currentQuestion,
    setCurrentQuestion: setCurrentQuestion,
    currentQuestionContent:currentQuestionContent,
    setCurrentQuestionContent: setCurrentQuestionContent,
    startedQuestions:startedQuestions,
    setStartedQuestions:setStartedQuestions,
    endQuestions: endQuestions, 
    setEndQuestions:setEndQuestions
  }

  const questionsTemp = startedQuestions ? (
    <Questions Params={paramsQuestions}  />
  ) : (
      <>
       <Text>Vamos fazer algumas perguntas para cadastro</Text>
        <ContainerButtons>
          <ButtonTouch color="#4197E5" onPress={handleOnClickStart}>
            <TextButton>COMEÇAR</TextButton>
          </ButtonTouch>
        </ContainerButtons>
      </>
    );

  return (
    <Container>
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
    </Container >
  );
}
