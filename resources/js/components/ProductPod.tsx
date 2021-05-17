import React from 'react'
import Product from '../interfaces/Product'
import { createUseStyles } from 'react-jss'

interface Props {
    product : Product
}

const ProductPod : React.FC<Props> = (props) => {

    const styles = useStyles()
    const product = props.product

    return (
        <div className={styles.container}>
            <div className={styles.txtName}>{product.name + ' - R$' + product.price.toFixed(2)}</div>
            <div className={styles.txtDescription}>{product.description}</div>
        </div>
    )

}

export default ProductPod

const useStyles = createUseStyles({
    container : {
        backgroundColor : '#ffc3ad',
        borderRadius : 5,
        padding : '0.3em',
        paddingLeft : '1em',
        margin : '0.5em'
    },
    txtName : {
        marginBottom : '0.5em',
        marginTop : '0.5em'
    },
    txtDescription : {
        fontSize : 10
    }
})