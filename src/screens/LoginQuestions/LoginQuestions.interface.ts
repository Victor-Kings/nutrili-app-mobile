export interface ICurrentQuestionContent{
    id?: number,
    typeForm?: string,
    question: string,
    typeAnswer?: string,
    unityMeasure?: string|undefined|null,
    placeholder?: string,
    checkQuestions?: {
      fields?: string[],
    },
    previousQuestion: number,
    nextQuestion?: {
      condition?: number[]|null,
      next?: number|null,
    },
    isLastQuestion: boolean
}

export interface IPayloadUser{
    name?: string,
    phone?: string,
    gender?: string,
    birth?: string,
    isNutritionist: boolean,
}

export interface IpayloadResponses{
    idQuestion?: number,
    answer?: string,
}