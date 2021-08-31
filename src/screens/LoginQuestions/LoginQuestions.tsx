import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { TextContainer, ButtonTouch, Title, TextButton } from "./styles";
import IconBack from "../../assets/img/iconBackBlue.svg";
import { QuestionsTemplate } from "../../components/QuestionsTemplate/QuestionsTemplate";
import { loginForm, healthForm } from "../../../__mocks__/form";
import { InsertsCustom } from "./components/InsertsCustom";
export function LoginQuestions({ ...props }: any) {
  const [startedQuestions, setStartedQuestions] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({
    number: 0,
    type: 1,
  });

  const [currentQuestionContent, setCurrentQuestionContent] = useState<any>({
    id: null,
    question: "Vamos fazer algumas perguntas para cadastro",
    typeAnswer: null,
    unityMeasure: null,
    placeholder: null,
    checkQuestions: {
      fields: null,
    },
    previousQuestion: 1,
    nextQuestion: {
      condition: null,
      next: null,
    },
  });

  const [response, setResponse] = useState({
    idQuestion: 0,
    content: "",
  });

  const [payloadResponses, setPayloadResponses] = useState<any>(null);

  const [payloadUser, setPayloadUser] = useState({
    nome: "",
    phone: "",
    gender: "",
    birth: "",
  });
  const [endQuestion, setEndQuestions] = useState(false);

  const handleOnClick = () => {
    setStartedQuestions(true);
  };

  const questionText = (
    <TextContainer>
      <Title>
        {startedQuestions
          ? currentQuestionContent.question
          : "Vamos fazer algumas perguntas para cadastro"}
      </Title>
    </TextContainer>
  );

  const selectNextQuestion = (value: string): number => {
    if (currentQuestionContent.nextQuestion.condition && value === "sim") {
      return currentQuestionContent.nextQuestion.condition[0];
    }
    if (currentQuestionContent.nextQuestion.condition && value === "não") {
      return currentQuestionContent.nextQuestion.condition[1];
    }
    return currentQuestionContent.nextQuestion.next;
  };

  const populateLoginForm = (data: string) => {
    switch (currentQuestion.number) {
      case 1:
        setPayloadUser({ ...payloadUser, nome: data });
      case 2:
        setPayloadUser({ ...payloadUser, gender: data });
      case 3:
        setPayloadUser({ ...payloadUser, birth: data });
    }
  };

  const populateQuestionsForm = (data: string) => {
    if (!payloadResponses) {
      setPayloadResponses([
        {
          idQuestion: currentQuestion.number,
          content: data,
        },
      ]);
    } else {
      payloadResponses.push({
        idQuestion: currentQuestion.number,
        constent: data,
      });
      setPayloadResponses([...payloadResponses]);
    }
  };

  const handlerSetCurrentQuestion = (value: string) => {
    if (currentQuestion.type == 1) {
      populateLoginForm(value);
      if (currentQuestion.number < loginForm.length - 1) {
        let nextQuestion = selectNextQuestion(value);
        setCurrentQuestion((value) => ({
          number: nextQuestion,
          type: 1,
        }));
      } else {
        setCurrentQuestion(() => ({
          number: 0,
          type: 2,
        }));
      }
    }

    if (currentQuestion.type == 2) {
      populateQuestionsForm(value);
      if (currentQuestion.number < healthForm.length - 1) {
        let nextQuestion = selectNextQuestion(value);
        setCurrentQuestion((value: any) => ({
          number: nextQuestion,
          type: 2,
        }));
      } else {
        setEndQuestions(true);
      }
    }
  };

  const handlerBackQuestion = () => {
    setCurrentQuestion((value: any) => ({
      number: currentQuestionContent.previousQuestion,
      type: value.type,
    }));
  };

  const selectForm = () => {
    if (currentQuestion.type == 1) {
      return loginForm;
    }
    return healthForm;
  };

  useEffect(() => {
    const form = selectForm();
    setCurrentQuestionContent(form[currentQuestion.number]);
  }, [startedQuestions, currentQuestion]);

  function verifyPicker(value: any){
    if(value!== undefined){
      return value;
    }
    return undefined
  }
  const questionsTemp = startedQuestions ? (
    <>
      {questionText}
      <View>
        <Text>AAA</Text>
        <InsertsCustom
          handleOnchange={handlerSetCurrentQuestion}
          value={response.content}
          placeholder={currentQuestionContent.placeholder}
          type={currentQuestionContent.typeAnswer}
          picker={verifyPicker(currentQuestionContent.checkQuestions.fields)}
        />
      </View>
    </>
  ) : (
    <>
      {questionText}
      <ButtonTouch color="#4197E5" onPress={handleOnClick}>
        <TextButton>COMEÇAR</TextButton>
      </ButtonTouch>
    </>
  );
  return (
    <QuestionsTemplate
      handler={handlerBackQuestion}
      IconBack={IconBack}
      isActiveBackButton={startedQuestions}
    >
      {questionsTemp}
      {/* <InsertsCustom handleOnchange={handlerSetCurrentQuestion} value="OPA" placeholder="OK" type="bool"/> */}
    </QuestionsTemplate>
  );
}
