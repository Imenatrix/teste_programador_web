import React from 'react'
import { createUseStyles } from 'react-jss'
import { render } from 'react-dom'

interface Props {
    authenticated : boolean
}

const Home : React.FC<Props> = (props) => {

    const styles = useStyles()

    return (
        <nav className={styles.topbar}>
            <a className={styles.link} href="/">Home</a>
            <a className={styles.link} href="/product">Produtos</a>
            <a className={styles.link} href="/api">API</a>
            <div className={styles.spacer}/>
            {props.authenticated ?
                <a className={styles.link} href="/logout">Logout</a>
            : <>
                <a className={styles.link} href="/login">Login</a>
                <a className={styles.link} href="/user/create">Registrar</a>
            </> }
        </nav>
    )

}

const useStyles = createUseStyles({
    topbar : {
        display : 'flex',
        backgroundColor : 'coral',
        height : 50,
        alignItems : 'center',
        paddingRight : '0.5em',
        paddingLeft : '0.5em'
    },
    link : {
        textDecoration : 'none',
        color : 'ivory',
        margin : '0.2em'
    },
    spacer : {
        flex : 1
    }
})

const root = document.getElementById('root')
const authenticated = root?.getAttribute('authenticated') === '1'
render(<Home authenticated={authenticated}/>, root)