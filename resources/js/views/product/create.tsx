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
                <ProductForm/>
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
render(<Create authenticated={authenticated}/>, root)