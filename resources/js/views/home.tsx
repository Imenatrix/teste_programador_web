import React from 'react'
import { render } from 'react-dom'

const Home : React.FC = () => {

    return (
        <nav>
            <a href="/">Home</a>
            <a href="/products">Produtos</a>
            <a href="/api">API</a>
            <a href="/login">Login</a>
            <a href="/user/create">Registrar</a>
        </nav>
    )

}

const root = document.getElementById('root')
render(<Home/>, root)