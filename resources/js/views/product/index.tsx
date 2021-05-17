import React from 'react'
import { render } from 'react-dom'

interface Props {
    products : Array<any>
}

const Index : React.FC<Props> = (props) => {
    
    return (
        <div>
            {props.products.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    )

}

const root = document.getElementById('root')
const products = JSON.parse(root?.getAttribute('products') || '[]')
render(<Index products={products}/>, root)