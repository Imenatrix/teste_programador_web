import React, { useState } from 'react'
import Product from '../interfaces/Product'
import ProductPod from './ProductPod'
import { createUseStyles } from 'react-jss'
import Fuse from 'fuse.js'

interface Props {
    products : Array<Product>
}

const ProductList : React.FC<Props> = (props) => {

    const styles = useStyles()
    const products = props.products

    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState<Array<Product>>(products)

    function handleOnSearchChange(e : React.ChangeEvent<HTMLInputElement>) {
        const newSearch = e.target.value
        const fuse = new Fuse(products, {
            includeScore : true,
            keys : ['name', 'price', 'description']
        })
        const result = fuse.search(newSearch).map(result => result.item)
        setSearchResult(result.length != 0 ? result : products)
        setSearch(newSearch)
    }

    return(
        <div className={styles.container}>
            <input value={search} onChange={handleOnSearchChange} className={styles.input} type="text" placeholder="Buscar"/>
            <div className={styles.list}>
                {searchResult.map(product => (<>
                    <ProductPod key={product.id} product={product}/>
                </>))}
            </div>
        </div>
    )

}

export default ProductList

const useStyles = createUseStyles({
    container : {
        display : 'flex',
        flexDirection : 'column',
        backgroundColor : 'coral',
        borderRadius : 5,
        width : '75vw',
        height : '75vh'
    },
    input : {
        border : 'none',
        outline : 'none',
        padding : '0.5em',
        borderRadius : 5,
        margin : '1em',
    },
    list : {
        backgroundColor : 'lightsalmon',
        flex : 1,
        padding : '0.5em'
    }
})