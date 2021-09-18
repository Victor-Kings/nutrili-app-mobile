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
            fields: ['','masculino', 'feminino']
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
            fields: ['','ganhei', 'perdi']
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
            fields: ['','diabetes', 'pressão alta']
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

const formFindNutritionist = [
    {
        id: 11,
        typeForm: "completeForm",
        question: "Você já foi em um nutricionista?",
        typeAnswer: "bool",
        unityMeasure: '',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 11,
        nextQuestion: {
            condition: null,
            next: 12
        }
    },
    {
        id: 12,
        typeForm: "completeForm",
        question: "Possui convênio?",
        typeAnswer: "bool",
        unityMeasure: '',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 11,
        nextQuestion: {
            condition: [13,14],
            next: null
        }
    },
    {
        id: 13,
        typeForm: "completeForm",
        question: "Qual?",
        typeAnswer: "insertText",
        unityMeasure: '',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 12,
        nextQuestion: {
            condition: null,
            next: 14
        }
    },
    {
        id: 14,
        typeForm: "completeForm",
        question: "Faz o uso de algum medicamento?",
        typeAnswer: "bool",
        unityMeasure: '',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 12,
        nextQuestion: {
            condition: [15,16],
            next: null
        }
    },
    {
        id: 15,
        typeForm: "completeForm",
        question: "Qual?",
        typeAnswer: "insertText",
        unityMeasure: '',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 14,
        nextQuestion: {
            condition: null,
            next: 16
        }
    },
    {
        id: 16,
        typeForm: "completeForm",
        question: "Mora sozinho?",
        typeAnswer: "bool",
        unityMeasure: '',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 14,
        nextQuestion: {
            condition: [18,17],
            next: null
        }
    },
    {
        id: 17,
        typeForm: "completeForm",
        question: "Faz as refeições acompanhado?",
        typeAnswer: "bool",
        unityMeasure: '',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 16,
        nextQuestion: {
            condition: null,
            next: null
        }
    },
    {
        id: 18,
        typeForm: "completeForm",
        question: "Gosta de morar sozinho?",
        typeAnswer: "bool",
        unityMeasure: '',
        placeholder: "",
        checkQuestions: {
            fields: undefined
        },
        previousQuestion: 16,
        nextQuestion: {
            condition: null,
            next: 18
        }
    }
]
export { form };