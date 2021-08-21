export interface IInsertCustomProps {
    type: string;
    value: string;
    handleOnchange:(value: string)=> void;
    placeholder: string;
    picker?: string[];
}