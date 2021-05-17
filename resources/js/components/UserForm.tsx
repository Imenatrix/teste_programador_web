import React from 'react'
import CSRF from './CSRF'
import { createUseStyles } from 'react-jss'

interface Props {
    register? : boolean
}

const UserForm : React.FC<Props> = (props) => {

    const styles = useStyles()
    const register = props.register

    return (
        <form className={styles.container} method="post" action={register ? '/user' : '/user/authenticate'}>
            <CSRF/>
            {register && <>
                <input className={styles.input} type="text" name="name" placeholder="Insira seu nome"/> <br/>
            </> }
            <input className={styles.input} type="text" name="email" placeholder="Insira seu e-mail"/> <br/>
            <input className={styles.input} type="password" name="password" placeholder="Insira sua senha"/> <br/>
            <input className={styles.btnSubmit} type="submit" value={register ? 'Registar' : 'Login'}/>
        </form>
    )

}

export default UserForm

const useStyles = createUseStyles({
    container : {
        backgroundColor : 'coral',
        padding : '1.5em',
        borderRadius : 5
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
    }
})

