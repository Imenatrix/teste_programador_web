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
        <form className={styles.container} method="post" action={product ? '/product/' + product.id : '/product'}>
            <CSRF/>
            <input type="hidden" name="_method" value="PATCH"/>
            <input className={styles.input} type="text" name="name" defaultValue={product?.name} placeholder="Insira nome do produto"/> <br/>
            <input className={styles.input} type="number" step="0.01" name="price" defaultValue={product?.price} placeholder="Insira o preço do produto"/> <br/>
            <textarea className={styles.input + ' ' + styles.txtDescription} name="description" defaultValue={product?.description} placeholder="Insira descrição do produto"/> <br/>
            <input className={styles.btnSubmit} type="submit" value={product ? 'Salvar' : 'Adicionar'}/>
        </form>
    )

}

export default ProductForm

const useStyles = createUseStyles({
    container : {
        backgroundColor : 'coral',
        padding : '1.5em',
        borderRadius : 5,
        width : 'fit-content'
    },
    input : {
        border : 'none',
        outline : 'none',
        padding : '1em',
        borderRadius : 5,
        marginBottom : '1em',
        width : '20em'
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

