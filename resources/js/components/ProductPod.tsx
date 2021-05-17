import React from 'react'
import Product from '../interfaces/Product'
import { createUseStyles } from 'react-jss'
import CSRF from './CSRF'

interface Props {
    product : Product,
    onBtnEditPress? : () => void
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
            <div className={styles.btnGroup}>
                <button className={styles.btnDelete} onClick={props.onBtnEditPress}>E</button>
                <form method="post" action={'/product/' + product.id}>
                    <CSRF/>
                    <input type="hidden" name="_method" value="DELETE"/>
                    <input className={styles.btnDelete} type="submit" value="D"/>
                </form>
            </div>
        </div>
    )

}

export default ProductPod

const useStyles = createUseStyles({
    container : {
        backgroundColor : 'coral',
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
        marginTop : '0.5em',
        color : 'white',
        fontWeight : 'bold'
    },
    txtDescription : {
        fontSize : 10,
        color : 'white',
        fontWeight : 'bold'
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
        borderRadius : 20,
        marginRight : '0.7em'
    },
    btnGroup : {
        display : 'flex'
    }
})