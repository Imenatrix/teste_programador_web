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
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : '12.5vh',
        paddingLeft : '12.5vw',
        paddingRight : '12.5vw',
        boxSizing : 'border-box',
        paddingBottom : 0
    }
})

const root = document.getElementById('root')
const products : Array<Product> = JSON.parse(root?.getAttribute('products') || '[]')
render(<Index products={products}/>, root)