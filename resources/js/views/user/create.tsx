import React from 'react'
import { render } from 'react-dom'

const Create : React.FC = () => {

    return (
        <h1>Hello, world!</h1>
    )

}

const root = document.getElementById('root')
render(<Create/>, root)