export interface IInsertCustomProps {
    type: string;
    handleOnchange: (value: string) => void;
    placeholder: string;
    picker?: string[];
}