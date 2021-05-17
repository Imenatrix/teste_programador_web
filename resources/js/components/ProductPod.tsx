import React from 'react'
import Product from '../interfaces/Product'
import { createUseStyles } from 'react-jss'
import CSRF from './CSRF'

interface Props {
    product : Product
}

const ProductPod : React.FC<Props> = (props) => {

    const styles = useStyles()
    const product = props.product

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.txtName}>{product.name + ' - R$' + product.price.toFixed(2)}</div>
                <div className={styles.txtDescription}>{product.description}</div>
            </div>
            <form method="post" action={'/product/' + product.id}>
                <CSRF/>
                <input type="hidden" name="_method" value="DELETE"/>
                <input className={styles.btnDelete} type="submit" value="D"/>
            </form>
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
        margin : '0.5em',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    txtName : {
        marginBottom : '0.5em',
        marginTop : '0.5em'
    },
    txtDescription : {
        fontSize : 10
    },
    btnDelete : {
        backgroundColor : '#ff4e0d',
        color : 'white',
        fontWeight : 'bold',
        border : 'none',
        outline : 'none',
        alignSelf : 'flex-end',
        height : 40,
        width : 40,
        borderRadius : 20
    }
})