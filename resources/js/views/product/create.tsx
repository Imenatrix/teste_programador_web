import React from 'react'
import ProductForm from '../../components/ProductForm'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'
import TopNav from '../../components/TopNav'

interface Props {
    authenticated : boolean
}

const Create : React.FC<Props> = (props) => {

    const styles = useStyles()

    return (
        <div className={styles.container}>
            <TopNav authenticated={props.authenticated}/>
            <div className={styles.content}>
                <div className={styles.form}>
                    <ProductForm/>
                </div>
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
    },
    form : {
        flex : 1,
        paddingRight : '30%',
        paddingLeft : '30%'
    }
})

const root = document.getElementById('root')

const authenticated = root?.getAttribute('authenticated') === '1'
root?.removeAttribute('authenticated')

render(<Create authenticated={authenticated}/>, root)