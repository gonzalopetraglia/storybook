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
}

export const MyLabel = ({label = 'Example', size = 'normal', color = 'primary', allCaps = false, fontColor }: MyLabelProps) => {
  return (
    <span className={`label ${ size } text-${ color }`} style={{color: fontColor}}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
