import React from 'react'
import ProductForm from '../../components/ProductForm'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'
import Product from '../../interfaces/Product'

interface Props {
    product : Product
}

const Edit : React.FC<Props> = (props) => {

    const styles = useStyles()

    return (
        <div className={styles.container}>
            <ProductForm product={props.product}/>
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
const product : Product = JSON.parse(root!.getAttribute('product')!)
render(<Edit product={product}/>, root)