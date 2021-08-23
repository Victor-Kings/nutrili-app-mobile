import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { TextContainer, ButtonTouch, Title, TextButton } from "./styles";
import IconBack from "../../assets/img/iconBackBlue.svg";
import { QuestionsTemplate } from "../../components/QuestionsTemplate/QuestionsTemplate";
import { form } from "../../../__mocks__/form";
import { InsertsCustom } from './components/InsertsCustom'

export function LoginQuestions({ ...props }: any) {
    const [startedQuestions, setStartedQuestions] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [currentQuestionContent, setCurrentQuestionContent] = useState<any>({
        id: null,
        typeForm: null,
        question: "Vamos fazer algumas perguntas para cadastro",
        typeAnswer: null,
        unityMeasure: null,
        placeholder: null,
        checkQuestions: {
            fields: undefined,
        },
        previousQuestion: 1,
        nextQuestion: {
            condition: undefined,
            next: null,
        },
    });

    const [payloadResponses, setPayloadResponses] = useState<any>(null);
    const [payloadUser, setPayloadUser] = useState({
        name: "",
        phone: "",
        gender: "",
        birth: "",
        isNutricionist: false,
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
        if (currentQuestionContent.nextQuestion.condition && value === "yes") {
            console.log("EEEE", currentQuestionContent.nextQuestion.condition[0])
            return currentQuestionContent.nextQuestion.condition[0];
        }
        if (currentQuestionContent.nextQuestion.condition && value === "no") {
            console.log("UUU", currentQuestionContent.nextQuestion.condition[1])
            return currentQuestionContent.nextQuestion.condition[1];
        }
        return currentQuestionContent.nextQuestion.next;
    };

    const populateLoginForm = (data: string) => {
        switch (currentQuestion + 1) {
            case 1: setPayloadUser({ ...payloadUser, name: data })
                break
            case 2: setPayloadUser({ ...payloadUser, gender: data })
                break
            case 3: setPayloadUser({ ...payloadUser, birth: data })
                break
        }
    }

    const populateQuestionsForm = (data: string) => {
        if (!payloadResponses) {
            setPayloadResponses([{
                idQuestion: currentQuestion,
                content: data
            }])
        } else {
            payloadResponses.push({
                idQuestion: currentQuestion,
                constent: data
            })
            setPayloadResponses([...payloadResponses])
        }
    }

    function handlerSetCurrentQuestion(value: string) {
        if (currentQuestionContent.typeForm == "loginForm") {
            populateLoginForm(value)
        } else {
            populateQuestionsForm(value)
        }
        if (currentQuestion < form.length - 1) {
            console.log("SELECT", currentQuestionContent)
            let nextQuestion = selectNextQuestion(value);
            setCurrentQuestion(nextQuestion - 1);
        } else {
            setEndQuestions(true)
        }
    };

    const handlerBackQuestion = () => {
        setCurrentQuestion(currentQuestionContent.previousQuestion - 1)
    }

    useEffect(() => {
        setCurrentQuestionContent(form[currentQuestion]);
    }, [startedQuestions, currentQuestion]);

    const questionsTemp = startedQuestions ? (
        <>
            <View>
                {questionText}
                <InsertsCustom
                    handleOnchange={handlerSetCurrentQuestion}
                    placeholder={currentQuestionContent.placeholder}
                    type={currentQuestionContent.typeAnswer}
                    picker={currentQuestionContent.checkQuestions.fields}
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
