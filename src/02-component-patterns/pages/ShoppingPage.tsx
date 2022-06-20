import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
// import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from '../data/products';
import '../styles/custom-styles.css';
import styles from '../styles/styles.module.css';

const product = products[0];


export const ShoppingPage = () => {   

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div> 
                <ProductCard 
                    key={ product.id }
                    product={ product }
                    className="bg-dark text-white"
                    initialValues={{
                        count: 4,
                        maxCount: 10,
                        minCount: 0
                    }}
                >
                    {
                        ( args ) => (
                            <>
                                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                                <ProductTitle className="text-bold" />
                                <ProductButtons className="custom-buttons" />
                                <button onClick={ args.reset }>Reset</button>
                                <button className={ `${ styles.buttonMinus } ${ args.isMinCountReached && styles.disabled   }` } onClick={ () => args.increaseBy(-2) }> -2 </button>
                                {/* Si no se llega al isMaxCount, ocultar */}
                                <button className={ `${ styles.buttonAdd } ${ args.isMaxCountReached && styles.disabled }` } onClick={ () => args.increaseBy(+2) }> +2 </button>
                                <span>{ args.count }</span>
                            </>
                        )
                    }
                </ProductCard>
            
            </div>
            
            <div className="shopping-cart">


                    
            </div>

        </div>
    )
}
