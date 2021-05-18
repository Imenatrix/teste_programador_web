import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import Token from '../interfaces/Token'
import CSRF from './CSRF'
import TokenPod from './TokenPod'

interface Props {
    tokens : Array<Token>
}

const TokenList : React.FC<Props> = (props) => {

    const styles = useStyles()
    const tokens = props.tokens

    return(
        <div className={styles.container}>
            <form className={styles.form} action='/api' method='post'>
                <CSRF/>
                <input className={styles.input} type="text" name="token_name" placeholder="Insira o nome do novo token"/>
                <button className={styles.btnNew} type="submit">Novo</button>
            </form>
            <div className={styles.list}>
                {tokens.map(token => (
                    <TokenPod key={token.id} token={token}/>
                ))}
            </div>
        </div>
    )

}

export default TokenList

const useStyles = createUseStyles({
    container : {
        display : 'flex',
        flexDirection : 'column',
        backgroundColor : 'coral',
        borderRadius : 5,
        flex : 1,
        boxShadow : [0, 0, 5, 'gray']
    },
    input : {
        flex : 1,
        border : 'none',
        outline : 'none',
        padding : '0.5em',
        borderRadius : 5,
        margin : '1em',
        marginRight : 0
    },
    form : {
        display : 'flex'
    },
    list : {
        display : 'flex',
        flexDirection : 'column',
        backgroundColor : 'white',
        flex : 1,
        padding : '0.5em'
    },
    btnNew : {
        padding : '0.5em',
        borderRadius : 5,
        backgroundColor : 'lightsalmon',
        border : 'none',
        color : 'white',
        fontWeight : 'bold',
        margin : '1em',
        width : '12.5%',
        outline : 'none'
    }
})