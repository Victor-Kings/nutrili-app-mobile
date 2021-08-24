interface Content {
    id?: number;
    typeForm?: string,
    question?: string
    typeAnswer?: string,
    unityMeasure?: string,
    placeholder?: string,
    checkQuestions: {
        fields?: string[],
    },
    previousQuestion?: number,
    nextQuestion: {
        condition?: number[],
        next?: number,
    },
}
export interface IInsertCustomProps {
    handleOnchange: (value: string) => void;
    content: Content
}