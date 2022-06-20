import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
    children: ( arg: ProductCardHandlers ) => JSX.Element;
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props ) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, isMinCountReached, reset, minCount }
     = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount,
            minCount
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children({
                  count: counter,
                  isMaxCountReached,
                  isMinCountReached,
                  maxCount: initialValues?.maxCount,
                  minCount: initialValues?.minCount,
                  product,
                  increaseBy,
                  reset,
                }) }
            </div>
        </Provider>
    )
}
