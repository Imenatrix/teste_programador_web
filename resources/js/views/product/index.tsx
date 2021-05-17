import React from 'react'
import { render } from 'react-dom'
import Product from '../../interfaces/Product'
import ProductList from '../../components/ProductList'
import { createUseStyles } from 'react-jss'

interface Props {
    products : Array<Product>
}

const Index : React.FC<Props> = (props) => {

    const styles = useStyles()
    
    return (
        <div className={styles.container}>
            <ProductList products={props.products}/>
        </div>
    )

}

const useStyles = createUseStyles({
    container : {
        width : '100vw',
        height : '100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    }
})

const root = document.getElementById('root')
const products : Array<Product> = JSON.parse(root?.getAttribute('products') || '[]')
render(<Index products={products}/>, root)