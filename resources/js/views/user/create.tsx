import React from 'react'
import { render } from 'react-dom'

const Create : React.FC = () => {

    return (
        <div>
            <form action="/user/store">
                <input type="text" name="name"/> <br/>
                <input type="text" name="email"/> <br/>
                <input type="password" name="password"/> <br/>
                <input type="submit" value="Registar"/>
            </form>
        </div>
    )

}

const root = document.getElementById('root')
render(<Create/>, root)