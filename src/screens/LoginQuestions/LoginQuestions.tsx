import React, { useState, useEffect } from "react";
import { View, Text } from "react-native"
import { BackButtonContainer, TextContainer, ButtonTouch, Title, TextButton } from "./styles";
import { ButtonMenu } from "../../components/ButtonMenu/ButtonMenu";
import IconBack from "../../assets/img/iconBackBlue.svg";
import { QuestionsTemplate } from "../../components/QuestionsTemplate/QuestionsTemplate"
import {loginForm, healthForm} from '../../../__mocks__/form'


export function LoginQuestions({ ...props }: any) {
    const [startedQuestions, setStartedQuestions] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState({ number: 0, type: 1 })
    const [currentQuestionContent, setCurrentQuestionContent] = useState<any>(
        {
            id: null,
            question: "Vamos fazer algumas perguntas para cadastro",
            typeAnswer: null,
            unityMeasure: null,
            checkQuestions: {
                fields: null
            },
            nextQuestion: {
                condition: null,
                next: null
            }
        }
    )
    const [endQuestion, setEndQuestions] = useState(false)

    const handler = (page?: string) => {
        props.navigation.navigate(page);
    };

    const handleOnClick = () => {
        setStartedQuestions(true)
    };


    const questionText =
        <TextContainer>
            <Title>{startedQuestions ? currentQuestionContent.question : "Vamos fazer algumas perguntas para cadastro"}</Title>
        </TextContainer>

    const handlerSetCurrentQuestion = () => {
        if (currentQuestion.type == 1) {
            if (currentQuestion.number < loginForm.length) {
                setCurrentQuestion((value) => ({
                    number: value.number + 1,
                    type: 1
                }))
            } else {
                setCurrentQuestion({
                    number: 0,
                    type: 2
                })
            }
        } else {
            if (currentQuestion.number < healthForm.length) {
                setCurrentQuestion((value: any) => ({
                    number: value.number + 1,
                    type: 2
                }))
            } else {
                setEndQuestions(true)
            }
        }
    }

    let field
    if (currentQuestionContent.typeAnswer == 'insertText') {
        field = <Text onPress={handlerSetCurrentQuestion} >INSERTTEXT</Text>
    }
    if (currentQuestionContent.typeAnswer == 'insertCustom') {
        field = <Text onPress={handlerSetCurrentQuestion} >insertCustom</Text>
    }
    if (currentQuestionContent.typeAnswer == 'data') {
        field = <Text onPress={handlerSetCurrentQuestion} >data</Text>
    }
    if (currentQuestionContent.typeAnswer == 'insertNumber') {
        field = <Text onPress={handlerSetCurrentQuestion} >insertNumber</Text>
    }
    console.log(currentQuestionContent)

    const questionsField =
        <View>
            <Text>AAA</Text>
            {field}
        </View>

    const selectForm = () => {
        if (currentQuestion.type == 1) {
            return loginForm
        }
        return healthForm
    }

    useEffect(() => {
        const form = selectForm()
        setCurrentQuestionContent(form[currentQuestion.number])
    }, [startedQuestions])

    useEffect(() => {
        const form = selectForm()
        setCurrentQuestionContent(form[currentQuestion.number])
    }, [currentQuestion])

    const questionsTemp =
        startedQuestions ?
            <>
                {questionText}
                {questionsField}
            </> :
            <>
                {questionText}
                <ButtonTouch color="#4197E5" onPress={handleOnClick}>
                    <TextButton>COMEÇAR</TextButton>
                </ButtonTouch>
            </>
    return (
        <QuestionsTemplate handler={handler} IconBack={IconBack} isActiveBackButton={startedQuestions}>
            {questionsTemp}
        </QuestionsTemplate>
    )
}
