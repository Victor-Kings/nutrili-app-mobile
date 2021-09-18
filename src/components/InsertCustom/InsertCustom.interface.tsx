interface Content {
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
}

export interface IInsertCustomProps {
    handleOnchange: (value: string) => void;
    content: Content
}