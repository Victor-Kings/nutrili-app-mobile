 export  interface IModalProps {
    modalOpen?:boolean;
    requisitionType: string;
    closeModal?:()=>void;
    handlerSelectPatient:(id:string)=>void
}
