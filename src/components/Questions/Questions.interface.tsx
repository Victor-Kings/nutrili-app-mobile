import { ICurrentQuestionContent, IpayloadResponses, IPayloadUser } from "../../screens/LoginQuestions/LoginQuestions.interface";

export interface IQuestionParams{
    payloadUser?: IPayloadUser,
    setPayloadUser?: (value: IPayloadUser) => void,
    payloadResponses: IpayloadResponses[] | null,
    setPayloadResponses: (value: IpayloadResponses[]) => void,
    form:ICurrentQuestionContent[],
    currentQuestion: number,
    setCurrentQuestion: (value: number) => void,
    currentQuestionContent: ICurrentQuestionContent,
    setCurrentQuestionContent: (value: ICurrentQuestionContent)=> void,
    startedQuestions: boolean,
    setStartedQuestions: (value: boolean)=> void,
    endQuestions: boolean, 
    setEndQuestions: (value: boolean)=> void,
}

export interface IQuestionProps {
    Params: IQuestionParams;
}