import React from 'react'
import CSRF from './CSRF'
import { createUseStyles } from 'react-jss'

interface Props {
    register? : boolean
    errors : Array<string>
}

const UserForm : React.FC<Props> = (props) => {

    const styles = useStyles()
    const register = props.register
    const errors = props.errors

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{register ? 'Cadastro' : 'Login'}</h3>
            {errors.length > 0 &&
                <ul>
                    {errors.map(error => (
                        <li className={styles.error} key={error}>{error}</li>
                    ))}
                </ul>
            }
            <form
                method="post"
                className={styles.form}
                action={register ? '/user' : '/user/authenticate'}>
                <CSRF/>
                {register && <>
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Insira seu nome"/> <br/>
                </> }
                <input
                    type="text"
                    name="email"
                    className={styles.input}
                    placeholder="Insira seu e-mail"/> <br/>
                <input
                    type="password"
                    name="password"
                    className={styles.input}
                    placeholder="Insira sua senha"/> <br/>
                <input
                    type="submit"
                    className={styles.btnSubmit}
                    value={register ? 'Cadastre-se' : 'Entrar'}/>
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
    },
    error : {
        color : 'white',
    }
})

