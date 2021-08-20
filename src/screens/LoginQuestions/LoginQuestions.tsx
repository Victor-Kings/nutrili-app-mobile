import React, { useState, useEffect } from "react";
import { View, Text } from "react-native"
import { BackButtonContainer, TextContainer, ButtonTouch, Title, TextButton } from "./styles";
import { ButtonMenu } from "../../components/ButtonMenu/ButtonMenu";
import IconBack from "../../assets/img/iconBackBlue.svg";
import { QuestionsTemplate } from "../../components/QuestionsTemplate/QuestionsTemplate"

const loginForm = [
    {
        id: 1,
        question: "Insira seu nome",
        typeAnswer: "insertText", //'bool','insertText','checked','insertCustom','data','dependent','insertNumber'
        unityMeasure: null,
        checkQuestions: null,
        nextQuestion: {
            condition: null,
            next: 2
        }
    },
    {
        id: 2,
        question: "Gênero",
        typeAnswer: "insertCustom",
        unityMeasure: null,
        checkQuestions: {
            fields: ['masculino', 'feminino']
        },
        nextQuestion: {
            condition: null,
            next: 3
        }
    },
    {
        id: 3,
        question: "Data de Nascimento",
        typeAnswer: "data",
        unityMeasure: null,
        checkQuestions: null,
        nextQuestion: {
            condition: null,
            next: 0
        }
    }
]

const healthForm = [
    {
        id: 1,
        question: "Peso",
        typeAnswer: "insertNumber",
        unityMeasure: 'kg',
        checkQuestions: null,
        nextQuestion: {
            condition: null,
            next: 2
        }
    },
    {
        id: 2,
        question: "Houve alteração recentemente?",
        typeAnswer: "bool",
        unityMeasure: null,
        checkQuestions: null,
        nextQuestion: {
            condition: [3, 4],
            next: null
        }
    },
    {
        id: 3,
        question: "Ganhou ou Perdeu peso?",
        typeAnswer: "insertCustom",
        unityMeasure: null,
        checkQuestions: {
            fields: ['ganhei', 'perdi']
        },
        nextQuestion: {
            condition: null,
            next: 4
        }
    },
    {
        id: 4,
        question: "Altura",
        typeAnswer: "insertNumber",
        unityMeasure: 'm',
        checkQuestions: null,
        nextQuestion: {
            condition: null,
            next: 5
        }
    },
    {
        id: 5,
        question: "Possui problema de saúde?",
        typeAnswer: "bool",
        unityMeasure: null,
        checkQuestions: null,
        nextQuestion: {
            condition: [6, 7],
            next: null
        }
    },
    {
        id: 6,
        question: "Qual?",
        typeAnswer: "insertCustom",
        unityMeasure: null,
        checkQuestions: {
            fields: ['diabetes, preção alta']
        },
        nextQuestion: {
            condition: null,
            next: 7
        }
    },
    {
        id: 7,
        question: "Quantas Refeições faz ao dia?",
        typeAnswer: "insertNumber",
        unityMeasure: null,
        checkQuestions: null,
        nextQuestion: {
            condition: null,
            next: 0
        }
    }

]

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
