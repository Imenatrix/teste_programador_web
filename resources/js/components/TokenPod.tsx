import React from 'react'
import { createUseStyles } from 'react-jss'
import CSRF from './CSRF'
import Token from '../interfaces/Token'
import { MdClear } from 'react-icons/md'

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
            <form method="post" action={'/token/' + token.id}>
                <CSRF/>
                <input type="hidden" name="_method" value="DELETE"/>
                <button className={styles.btn} type="submit">
                    <MdClear/>
                </button>
            </form>
        </div>
    )

}

export default TokenPod

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
    }
})