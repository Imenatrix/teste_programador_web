import React, { useState } from 'react'
import Product from '../interfaces/Product'
import ProductPod from './ProductPod'
import ProductForm from './ProductForm'
import { createUseStyles } from 'react-jss'
import Fuse from 'fuse.js'

interface Props {
    products : Array<Product>
}

const ProductList : React.FC<Props> = (props) => {

    const styles = useStyles()
    const products = props.products

    const [search, setSearch] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<number>()
    const [searchResult, setSearchResult] = useState<Array<Product>>(products)

    // Fuzzy search
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

    function onBtnNewPress() {
        setShowForm(prev => !prev)
        setSelectedProduct(undefined)
    }

    function onBtnEditPress(id : number) {
        setShowForm(false)
        setSelectedProduct(id)
    }

    return(
        <div className={styles.container}>
            <input
                type="text"
                value={search}
                placeholder="Buscar"
                className={styles.input}
                onChange={handleOnSearchChange}/>
            <button className={styles.btnNew} onClick={onBtnNewPress}>Novo</button>
            {showForm &&
                <div className={styles.newForm}>
                    <ProductForm/>
                </div>
            }
            <div className={styles.list}>
                {searchResult.map(product => (
                    selectedProduct === product.id ?
                        <div className={styles.editForm} key={product.id}>
                            <ProductForm product={product}/>
                        </div>
                    :
                        <ProductPod
                            key={product.id}
                            product={product}
                            onBtnEditPress={() => onBtnEditPress(product.id)}/>
                ))}
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
        flex : 1,
        boxShadow : [0, 0, 5, 'gray']
    },
    input : {
        border : 'none',
        outline : 'none',
        padding : '0.5em',
        borderRadius : 5,
        margin : '1em',
    },
    list : {
        display : 'flex',
        flexDirection : 'column',
        backgroundColor : 'white',
        flex : 1,
        padding : '0.5em'
    },
    btnNew : {
        padding : '0.5em',
        borderRadius : 5,
        backgroundColor : 'lightsalmon',
        border : 'none',
        color : 'white',
        fontWeight : 'bold',
        margin : '1em',
        marginTop : 0,
        width : '12.5%',
        outline : 'none'
    },
    newForm : {
        backgroundColor : 'white',
        padding : '1em'
    },
    editForm : {
        padding : '0.5em'
    }
})