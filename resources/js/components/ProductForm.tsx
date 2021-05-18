import React from 'react'
import CSRF from './CSRF'
import { createUseStyles } from 'react-jss'
import Product from '../interfaces/Product'

interface Props {
    product? : Product
}

const ProductForm : React.FC<Props> = (props) => {

    const styles = useStyles()
    const product = props.product

    return (
        <form
            method="post"
            className={styles.container}
            action={product ? '/product/' + product.id : '/product'}>
            <CSRF/>
            {product &&
                <input type="hidden" name="_method" value="PATCH"/>
            }
            <input
                type="text"
                name="name"
                className={styles.input}
                defaultValue={product?.name}
                placeholder="Insira nome do produto"/> <br/>
            <input
                step="0.01"
                name="price"
                type="number"
                className={styles.input}
                defaultValue={product?.price}
                placeholder="Insira o preço do produto"/> <br/>
            <textarea
                name="description"
                defaultValue={product?.description}
                placeholder="Insira descrição do produto"
                className={styles.input + ' ' + styles.txtDescription}/> <br/>
            <input
                type="submit"
                className={styles.btnSubmit}
                value={product ? 'Salvar' : 'Adicionar'}/>
        </form>
    )

}

export default ProductForm

const useStyles = createUseStyles({
    container : {
        backgroundColor : 'coral',
        padding : '0.5em',
        borderRadius : 5
    },
    input : {
        border : 'none',
        outline : 'none',
        padding : '1em',
        borderRadius : 5,
        marginBottom : '1em',
        width : '100%',
        boxSizing : 'border-box'
    },
    btnSubmit : {
        width : '100%',
        padding : '1em',
        borderRadius : 5,
        backgroundColor : 'lightsalmon',
        border : 'none',
        color : 'white',
        fontWeight : 'bold',
    },
    txtDescription : {
        height : '10em',
        resize : 'none'
    }
})

