const loginForm = [
    {
        id: 1,
        question: "Insira seu nome",
        typeAnswer: "insertText", //'bool','insertText','checked','insertCustom','date','insertNumber'
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

export {loginForm, healthForm};