import { SvgProps } from 'react-native-svg'
export interface IButtomMenuProps{
    handleClick?: (page?:string) => void;
    Icon?: React.FC<SvgProps>;
    text?: string;
    sizeText?: number;
    sizeImageWidth?: number;
    sizeImageHeight?: number;
    containerSize?: number;
    page?: string;
    color?: string
}