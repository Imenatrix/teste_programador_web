import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import Token from '../interfaces/Token'
import TokenPod from './TokenPod'

interface Props {
    tokens : Array<Token>
}

const TokenList : React.FC<Props> = (props) => {

    const styles = useStyles()
    const tokens = props.tokens

    const [showForm, setShowForm] = useState(false)

    return(
        <div className={styles.container}>
            <button className={styles.btnNew} onClick={() => setShowForm(prev => !prev)}>Novo</button>
            {/*showForm &&
                <div className={styles.newForm}>
                    <TokenForm/>
                </div>
            */}
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
        flex : 1
    },
    list : {
        display : 'flex',
        flexDirection : 'column',
        backgroundColor : 'lightsalmon',
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