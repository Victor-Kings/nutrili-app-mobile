import { SvgProps } from 'react-native-svg'
export interface IButtomMenuProps{
    handleClick?: () => void;
    Icon?: React.FC<SvgProps>;
    text?: string;
    sizeText?: number;
    sizeImageWidth?: number;
    sizeImageHeight?: number;
    containerSize?: number;
}