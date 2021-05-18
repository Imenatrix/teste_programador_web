import React from 'react'
import { createUseStyles } from 'react-jss'
import { render } from 'react-dom'

interface Props {
    authenticated : boolean
}

const TopNav : React.FC<Props> = (props) => {

    const styles = useStyles()

    return (
        <nav className={styles.container}>
            <a className={styles.link} href="/">Home</a>
            <a className={styles.link} href="/product">Produtos</a>
            <a className={styles.link} href="/token">API</a>
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

export default TopNav

const useStyles = createUseStyles({
    container : {
        display : 'flex',
        backgroundColor : 'coral',
        height : 50,
        alignItems : 'center',
        paddingLeft : '1em',
        paddingRight : '1em'
    },
    link : {
        textDecoration : 'none',
        color : 'white',
        margin : '0.5em',
        '&:hover' : {
            textDecoration : 'underline'
        }
    },
    spacer : {
        flex : 1
    }
})