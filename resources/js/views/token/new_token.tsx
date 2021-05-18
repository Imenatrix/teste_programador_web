import React from 'react'
import ProductForm from '../../components/ProductForm'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'
import TopNav from '../../components/TopNav'

interface Props {
    authenticated : boolean
    name : string,
    token : string
}

const NewToken : React.FC<Props> = (props) => {

    const styles = useStyles()

    return (
        <div className={styles.container}>
            <TopNav authenticated={props.authenticated}/>
            <div className={styles.content}>
                <div className={styles.message}>
                    <h2 style={{textAlign : 'center'}}>Token gerado!</h2>
                    <div className={styles.tokenInfo}>
                        <div>Nome: {props.name}</div>
                        <div>Token: {props.token}</div>
                    </div>
                    <p>Ao sair dessa pagina, o token não estará mais disponível para visualização.</p>
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
    message : {
        backgroundColor : 'lightsalmon',
        borderRadius : 5,
        padding : '1em'
    },
    tokenInfo : {
        padding : '1em',
        borderRadius : 5,
        border : ['solid', 'white', 1]
    }
})

const root = document.getElementById('root')
const authenticated = root?.getAttribute('authenticated') === '1'
const name = root?.getAttribute('name') || ''
const token = root?.getAttribute('token') || ''
render(<NewToken name={name} token={token} authenticated={authenticated}/>, root)