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
        <div className={styles.container}>
            <h3 className={styles.header}>{register ? 'Cadastro' : 'Login'}</h3>
            <form className={styles.form} method="post" action={register ? '/user' : '/user/authenticate'}>
                <CSRF/>
                {register && <>
                    <input className={styles.input} type="text" name="name" placeholder="Insira seu nome"/> <br/>
                </> }
                <input className={styles.input} type="text" name="email" placeholder="Insira seu e-mail"/> <br/>
                <input className={styles.input} type="password" name="password" placeholder="Insira sua senha"/> <br/>
                <input className={styles.btnSubmit} type="submit" value={register ? 'Cadastre-se' : 'Entrar'}/>
            </form>
        </div>
    )

}

export default UserForm

const useStyles = createUseStyles({
    container : {
        backgroundColor : 'coral',
        borderRadius : 5,
        boxShadow : [0, 0, 5, 'gray']
    },
    header : {
        color : 'white',
        textAlign : 'center'
    },
    form : {
        backgroundColor : 'white',
        padding : '0.5em',
    },
    input : {
        border : ['solid', 'lightgray', 1],
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
        backgroundColor : 'coral',
        border : 'none',
        color : 'white',
        fontWeight : 'bold',
    }
})

