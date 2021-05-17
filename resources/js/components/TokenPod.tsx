import React from 'react'
import Product from '../interfaces/Product'
import { createUseStyles } from 'react-jss'
import CSRF from './CSRF'
import Token from '../interfaces/Token'

interface Props {
    token : Token
}

const TokenPod : React.FC<Props> = (props) => {

    const styles = useStyles()
    const token = props.token

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.txtName}>{token.name}</div>
            </div>
            <form method="post" action={'/product/' + token.id}>
                <CSRF/>
                <input type="hidden" name="_method" value="DELETE"/>
                <input className={styles.btn} type="submit" value="D"/>
            </form>
        </div>
    )

}

export default TokenPod

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
    btn : {
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
    }
})