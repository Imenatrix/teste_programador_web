import React from 'react'
import { render } from 'react-dom'
import TopNav from '../components/TopNav'

interface Props {
    authenticated : boolean
}

const Home : React.FC<Props> = (props) => {

    return (
        <TopNav authenticated={props.authenticated}/>
    )

}

const root = document.getElementById('root')

const authenticated = root?.getAttribute('authenticated') === '1'
root?.removeAttribute('authenticated')

render(<Home authenticated={authenticated}/>, root)