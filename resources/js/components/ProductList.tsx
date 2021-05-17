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
    const [selectedProduct, setSelectedProduct] = useState<number>();
    const [showForm, setShowForm] = useState(false)
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
            <button className={styles.btnNew} onClick={() => setShowForm(prev => !prev)}>Novo</button>
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
                        <ProductPod key={product.id} onBtnEditPress={() => setSelectedProduct(product.id)} product={product}/>
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
        flex : 1
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
        backgroundColor : 'lightsalmon',
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
        borderRadius : 5,
        border : ['solid', 'white', 1],
        width : 'fit-content',
        backgroundColor : 'coral',
        alignSelf : 'center',
        marginBottom : '1em'
    },
    editForm : {
        alignSelf : 'center'
    }
})