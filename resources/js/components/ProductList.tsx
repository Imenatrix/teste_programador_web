import React from 'react'
import Product from '../interfaces/Product'
import ProductPod from './ProductPod'
import { createUseStyles } from 'react-jss'

interface Props {
    products : Array<Product>
}

const ProductList : React.FC<Props> = (props) => {

    const styles = useStyles()
    const products = props.products

    return(
        <div className={styles.container}>
            <input className={styles.input} type="text" placeholder="Buscar"/>
            <div className={styles.list}>
                {products.map(product => (<>
                    <ProductPod key={product.id} product={product}/>
                    <ProductPod key={product.id} product={product}/>
                    <ProductPod key={product.id} product={product}/>
                    <ProductPod key={product.id} product={product}/>
                    <ProductPod key={product.id} product={product}/>
                </>))}
            </div>
        </div>
    )

}

export default ProductList

const useStyles = createUseStyles({
    container : {
        display : 'flex',
        flexDirection : 'column',
        backgroundColor : 'coral',
        borderRadius : 5,
        width : '75vw',
        height : '75vh'
    },
    input : {
        border : 'none',
        outline : 'none',
        padding : '0.5em',
        borderRadius : 5,
        margin : '1em',
    },
    list : {
        backgroundColor : 'lightsalmon',
        flex : 1,
        padding : '0.5em'
    }
})