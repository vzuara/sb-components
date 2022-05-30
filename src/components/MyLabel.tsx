import './mylabel.css'

export interface MyLabelProps {
  /**
   * Esta es la etiqueta que se mostrará
   */
  label: string;
  /**
   * Estos son los tamaños que se pueden usar
   */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Pone en mayusculas todo el texto
   */
   allCaps?: boolean;
   /**
   * Estos son los colores que se pueden usar
   */
   color?: 'primary'|'secondary'|'tertiary'
   /**
   * Color personalizado de la fuente
   */
    fontColor?: string
    /**
    * Color personalizado del fondo
    */
     backgroundColor?: string
  
}

export const MyLabel = ({
  allCaps = false,
  color   = 'primary',
  label   = 'No Label',
  size    = 'normal',
  fontColor,
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{color: fontColor, backgroundColor}}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
