const form = [
    {
        id: 1,
        typeForm: "loginForm",
        question: "Insira seu nome",
        typeAnswer: "insertText", //'bool','insertText','checked','insertCustom','date','insertNumber'
        unityMeasure: null,
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 0,
        nextQuestion: {
            condition: null,
            next: 2
        }
    },
    {
        id: 2,
        typeForm: "loginForm",
        question: "Gênero",
        typeAnswer: "insertCustom",
        unityMeasure: null,
        placeholder: "",
        checkQuestions: {
            fields: ['masculino', 'feminino']
        },
        previousQuestion: 1,
        nextQuestion: {
            condition: null,
            next: 3
        }
    },
    {
        id: 3,
        typeForm: "loginForm",
        question: "Data de Nascimento",
        typeAnswer: "data",
        unityMeasure: null,
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 2,
        nextQuestion: {
            condition: null,
            next: 4
        }
    },
    {
        id: 4,
        typeForm: "healthForm",
        question: "Peso",
        typeAnswer: "insertNumber",
        unityMeasure: 'Kg',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 1,
        nextQuestion: {
            condition: null,
            next: 5
        }
    },
    {
        id: 5,
        typeForm: "healthForm",
        question: "Houve alteração recentemente?",
        typeAnswer: "bool",
        unityMeasure: null,
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 1,
        nextQuestion: {
            condition: [6, 7],
            next: null
        }
    },
    {
        id: 6,
        typeForm: "healthForm",
        question: "Ganhou ou Perdeu peso?",
        typeAnswer: "insertCustom",
        unityMeasure: null,
        placeholder: "",
        checkQuestions: {
            fields: ['ganhei', 'perdi']
        },
        previousQuestion: 5,
        nextQuestion: {
            condition: null,
            next: 7
        }
    },
    {
        id: 7,
        typeForm: "healthForm",
        question: "Altura",
        typeAnswer: "insertNumber",
        unityMeasure: 'm',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 3,
        nextQuestion: {
            condition: null,
            next: 8
        }
    },
    {
        id: 8,
        typeForm: "healthForm",
        question: "Possui problema de saúde?",
        typeAnswer: "bool",
        unityMeasure: null,
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 4,
        nextQuestion: {
            condition: [9, 10],
            next: null
        }
    },
    {
        id: 9,
        typeForm: "healthForm",
        question: "Qual?",
        typeAnswer: "insertCustom",
        unityMeasure: null,
        placeholder: "",
        checkQuestions: {
            fields: ['diabetes', 'pressão alta']
        },
        previousQuestion: 8,
        nextQuestion: {
            condition: null,
            next: 10
        }
    },
    {
        id: 10,
        typeForm: "healthForm",
        question: "Quantas Refeições faz ao dia?",
        typeAnswer: "insertNumber",
        unityMeasure: '',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 5,
        nextQuestion: {
            condition: null,
            next: 11
        }
    }
]

export { form };