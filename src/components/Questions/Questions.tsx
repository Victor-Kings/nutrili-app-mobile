import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { ICurrentQuestionContent } from "../../screens/LoginQuestions/LoginQuestions.interface";
import { InsertsCustom } from "../InsertCustom/InsertsCustom";
import { IQuestionProps } from "./Questions.interface";
import { TextContainer, Title } from "./styles";

export function Questions({
  Params: {
    form,
    payloadResponses,
    payloadUser,
    setPayloadResponses,
    setPayloadUser,
    currentQuestion,
    setCurrentQuestion,
    currentQuestionContent,
    setCurrentQuestionContent,
    startedQuestions,
    setStartedQuestions,
    endQuestions, 
    setEndQuestions
  },
}: IQuestionProps) {
  console.log(currentQuestionContent.question)
  

  const selectNextQuestion = (value: string): number => {
    if (currentQuestionContent?.nextQuestion?.condition && value === "yes") {
      return currentQuestionContent.nextQuestion.condition[0];
    }
    if (currentQuestionContent?.nextQuestion?.condition && value === "no") {
      return currentQuestionContent.nextQuestion.condition[1];
    }
    if (currentQuestionContent?.nextQuestion?.next) {
      return currentQuestionContent.nextQuestion.next;
    }
    return 1;
  };

  const populateLoginForm = (data: string) => {
    if (setPayloadUser && payloadUser) {
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
    }
  };

  const populateQuestionsForm = (data: string) => {
    if (!payloadResponses) {
      setPayloadResponses([
        {
          idQuestion: currentQuestion + 1,
          answer: data,
        },
      ]);
    } else {
      const responsesAux = payloadResponses.filter(
        (obj: any) => obj.idQuestion !== currentQuestion + 1
      );

      responsesAux.push({
        idQuestion: currentQuestion + 1,
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
    if (!currentQuestionContent.isLastQuestion){
      let nextQuestion = selectNextQuestion(value);
      setCurrentQuestion(nextQuestion - 1);
    } else {
      setEndQuestions(true);
    }
  }

  useEffect(() => {
    var controle = true;
    if (controle) {
      setCurrentQuestionContent(form[currentQuestion]);
    }
    return function cleanUp() {
      controle = false;
    };
  }, [startedQuestions, currentQuestion]);

  const questionText = (
    <TextContainer>
      <Title>
        {currentQuestionContent.question}
      </Title>
    </TextContainer>
  );

  return (
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
  );
}
