/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    * Tamaño de la etiqueta?
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Color de la fuente?
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Todo en mayúsculas?
    */
    allCaps?: boolean;
    /**
    * Color personalizado de la fuente?
    */
    fontColor?: string;
    /**
    * Color personalizado del fondo?
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, backgroundColor, fontColor }: MyLabelProps) => JSX.Element;
