import React from 'react'
import UserForm from '../../components/UserForm'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'

const Login : React.FC = () => {

    const styles = useStyles()

    return (
        <div className={styles.container}>
            <UserForm/>
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
    }
})

const root = document.getElementById('root')
render(<Login/>, root)