import React from 'react'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'

const Create : React.FC = () => {

    const styles = useStyles()

    return (
        <div className={styles.container}>
            <form className={styles.form} action="/user/store">
                <input className={styles.input} type="text" name="name" placeholder="Insira seu nome"/> <br/>
                <input className={styles.input} type="text" name="email" placeholder="Insira seu e-mail"/> <br/>
                <input className={styles.input} type="password" name="password" placeholder="Insira sua senha"/> <br/>
                <input className={styles.btnSubmit} type="submit" value="Registar"/>
            </form>
        </div>
    )

}

const useStyles = createUseStyles({
    container : {
        width : '100vw',
        height : '100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },
    form : {
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

const root = document.getElementById('root')
render(<Create/>, root)