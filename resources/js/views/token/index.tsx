import React from 'react'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'
import TopNav from '../../components/TopNav'
import Token from '../../interfaces/Token'

interface Props {
    authenticated : boolean
    tokens : Array<Token>
}

const Index : React.FC<Props> = (props) => {

    const styles = useStyles()
    console.log(props.tokens)
    
    return (
        <div>
            <TopNav authenticated={props.authenticated}/>
            <div className={styles.content}>
                
            </div>
        </div>
    )

}

const useStyles = createUseStyles({
    content : {
        width : '100vw',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : '12.5vh',
        paddingLeft : '25vw',
        paddingRight : '25vw',
        boxSizing : 'border-box',
        paddingBottom : 0
    }
})

const root = document.getElementById('root')
const tokens : Array<Token> = JSON.parse(root?.getAttribute('tokens') || '[]')
const authenticated = root?.getAttribute('authenticated') === '1'
render(<Index tokens={tokens} authenticated={authenticated}/>, root)