import React from 'react'
import ProductForm from '../../components/ProductForm'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'

const Create : React.FC = () => {

    const styles = useStyles()

    return (
        <div className={styles.container}>
            <ProductForm/>
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
render(<Create/>, root)