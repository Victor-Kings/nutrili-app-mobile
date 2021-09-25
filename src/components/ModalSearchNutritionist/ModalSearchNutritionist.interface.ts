 export  interface IModalProps {
    modalOpen?:boolean;
    requisitionType?: string;
    closeModal?:()=>void;
}

export interface IResponseService{
    id: number;
    score: number;
    name: string;
    city: string;
    state: string;
}