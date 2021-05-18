import React from 'react'
import UserForm from '../../components/UserForm'
import TopNav from '../../components/TopNav'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'

interface Props {
    authenticated : boolean
    errors : Array<string>
}

const Create : React.FC<Props> = (props) => {

    const styles = useStyles()

    return (
        <div className={styles.container}>
            <TopNav authenticated={props.authenticated}/>
            <div className={styles.content}>
                <UserForm errors={props.errors} register/>
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
const errorsObj : {
    ['key'] : Array<string>
} = JSON.parse(root?.getAttribute('errors') || '{}')
const errors = Object.values(errorsObj).reduce((prev, curr) => prev.concat(curr), [])
render(<Create errors={errors} authenticated={authenticated}/>, root)