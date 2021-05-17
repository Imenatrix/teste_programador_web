import React from 'react'
import ProductForm from '../../components/ProductForm'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'
import Product from '../../interfaces/Product'
import TopNav from '../../components/TopNav'

interface Props {
    product : Product
    authenticated : boolean
}

const Edit : React.FC<Props> = (props) => {

    const styles = useStyles()

    return (
        <div className={styles.container}>
            <TopNav authenticated={props.authenticated}/>
            <div className={styles.content}>
                <ProductForm product={props.product}/>
            </div>
        </div>
    )

}

const useStyles = createUseStyles({
    container : {
        display : 'flex',
        flexDirection : 'column',
        width : '100vw',
        height : '100vh'
    },
    content : {
        flex : 1,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    }
})

const root = document.getElementById('root')
const product : Product = JSON.parse(root!.getAttribute('product')!)
const authenticated = root?.getAttribute('authenticated') === '1'
render(<Edit authenticated={authenticated} product={product}/>, root)