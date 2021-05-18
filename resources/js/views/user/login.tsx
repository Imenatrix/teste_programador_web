import React from 'react'
import UserForm from '../../components/UserForm'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'
import TopNav from '../../components/TopNav'

interface Props {
    authenticated : boolean
    errors : Array<string>
}

const Login : React.FC<Props> = (props) => {

    const styles = useStyles()

    console.log(props.errors)

    return (
        <div className={styles.container}>
            <TopNav authenticated={props.authenticated}/>
            <div className={styles.content}>
                <UserForm errors={props.errors}/>
            </div>
        </div>
    )

}

const useStyles = createUseStyles({
    container : {
        display : 'flex',
        flexDirection : 'column',
        width : '100vw',
        height : '100vh'
    },
    content : {
        flex : 1,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    }
})

const root = document.getElementById('root')

const authenticated = root?.getAttribute('authenticated') === '1'
root?.removeAttribute('authenticated')

const errorsObj : {
    ['key'] : Array<string>
} = JSON.parse(root?.getAttribute('errors') || '{}')
root?.removeAttribute('errors')

const errors = Object.values(errorsObj).reduce((prev, curr) => prev.concat(curr), [])

render(<Login errors={errors} authenticated={authenticated}/>, root)