import React from 'react'
import { render } from 'react-dom'
import Product from '../../interfaces/Product'
import ProductList from '../../components/ProductList'
import { createUseStyles } from 'react-jss'
import TopNav from '../../components/TopNav'

interface Props {
    products : Array<Product>
    authenticated : boolean
}

const Index : React.FC<Props> = (props) => {

    const styles = useStyles()
    
    return (
        <div>
            <TopNav authenticated={props.authenticated}/>
            <div className={styles.content}>
                <ProductList products={props.products}/>
            </div>
        </div>
    )

}

const useStyles = createUseStyles({
    content : {
        width : '100vw',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : '12.5vh',
        paddingLeft : '25vw',
        paddingRight : '25vw',
        boxSizing : 'border-box',
        paddingBottom : 0
    }
})

const root = document.getElementById('root')

const authenticated = root?.getAttribute('authenticated') === '1'
root?.removeAttribute('authenticated')

const products : Array<Product> = JSON.parse(root?.getAttribute('products') || '[]')
root?.removeAttribute('products')

render(<Index authenticated={authenticated} products={products}/>, root)