import React from 'react'
import { createUseStyles } from 'react-jss'
import { render } from 'react-dom'

const Home : React.FC = () => {

    const styles = useStyles()

    return (
        <nav className={styles.topbar}>
            <a className={styles.link} href="/">Home</a>
            <a className={styles.link} href="/products">Produtos</a>
            <a className={styles.link} href="/api">API</a>
            <div className={styles.spacer}/>
            <a className={styles.link} href="/login">Login</a>
            <a className={styles.link} href="/user/create">Registrar</a>
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
render(<Home/>, root)