/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Esta es la etiqueta que se mostrará
     */
    label: string;
    /**
     * Estos son los tamaños que se pueden usar
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Pone en mayusculas todo el texto
     */
    allCaps?: boolean;
    /**
    * Estos son los colores que se pueden usar
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Color personalizado de la fuente
    */
    fontColor?: string;
    /**
    * Color personalizado del fondo
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
