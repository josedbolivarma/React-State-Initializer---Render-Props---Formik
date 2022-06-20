import { useCallback, useContext, useState } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    style?: React.CSSProperties 
}

export const ProductButtons = ({ className, style }: Props) => {
    // TODO: maxCount
    // const [disabled, setDisabled] = useState(false);
    const { increaseBy, counter, maxCount, minCount } = useContext( ProductContext );
    

    // TODO: useCallback isMaxReached = useCallback, dependencias [ counter - cambie, maxCount ]
    const isMaxReached = useCallback(() => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )

    const isMinReached = useCallback(() => !!maxCount && counter === minCount,
    [counter, minCount],
  )

    // const isMinReached = useCallback(() => !!minCount && counter === minCount,
    // [counter, minCount],
    //  )

    // TRUE si el count === maxCount
    // FALSE si no lo es
    return (
        <div 
            className={ `${ styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button
                className={ `${styles.buttonMinus} ${ isMinReached() && styles.disabled }` }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button
                // className={ `${ (counter >= maxCount!)? styles.disabled : styles.buttonAdd }`
                className={ `${styles.buttonAdd} ${ isMaxReached() && styles.disabled }` }
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
    );
}