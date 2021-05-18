import React from 'react'
import Product from '../interfaces/Product'
import { createUseStyles } from 'react-jss'
import CSRF from './CSRF'
import { MdEdit, MdClear } from 'react-icons/md'

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
                <div className={styles.txtName}>{(product.name.length <= 25 ? product.name : product.name.substring(0, 25) + '...') + ' - R$' + product.price.toFixed(2)}</div>
                <div  className={styles.txtDescription}>{product.description.length <= 50 ? product.description : product.description.substring(0, 50) + '...'}</div>
            </div>
            <div className={styles.btnGroup}>
                <button className={styles.btn} onClick={props.onBtnEditPress}>
                    <MdEdit/>
                </button>
                <form method="post" action={'/product/' + product.id}>
                    <CSRF/>
                    <input type="hidden" name="_method" value="DELETE"/>
                    <button className={styles.btn} type="submit">
                        <MdClear/>
                    </button>
                </form>
            </div>
        </div>
    )

}

export default ProductPod

const useStyles = createUseStyles({
    container : {
        backgroundColor : 'white',
        borderRadius : 5,
        padding : '0.3em',
        paddingLeft : '1em',
        margin : '0.5em',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        border : ['solid', 'lightgray', 1],
        '&:hover' : {
            boxShadow : [0, 0, 5, 'lightgray']
        }
    },
    txtName : {
        marginBottom : '0.5em',
        marginTop : '0.5em'
    },
    txtDescription : {
        fontSize : 10
    },
    btn : {
        backgroundColor : 'coral',
        color : 'white',
        fontWeight : 'bold',
        border : 'none',
        outline : 'none',
        alignSelf : 'flex-end',
        height : 40,
        width : 40,
        borderRadius : 20,
        marginRight : '0.7em',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        fontSize : 20
    },
    btnGroup : {
        display : 'flex'
    }
})