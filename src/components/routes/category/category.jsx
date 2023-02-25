import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { CategoriesContext } from '../../../contexts/categories-context';

import Product from '../../product/product';

import {
    CategoryContainer,
    Title,
    ProductContainer
} from './category.styles'

const Category = () => {
    // routes/shop   <Route path=':category' element={<Category />} />
    const { category } = useParams();

    // [ {items: [{id: 1, name: 'Brown Brim, ...}, {...}], title: 'hats'}, {…}, ...]
    const { categories } = useContext(CategoriesContext)

    // { hats: Array(9), jackets: Array(5), mens: Array(6), ... }
    const categoriesMap = categories?.reduce((acc, el) => {
         const {title, items} = el
         acc[title.toLowerCase()] = items
         return acc
    }, {})

    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <CategoryContainer>
            <Title>{category.toUpperCase()}</Title>
            <ProductContainer>
                {
                    products?.map( product => (
                        <Product key={product.id} product={product} />
                    ))  
                }
            </ProductContainer>
        </CategoryContainer>
    )
}

export default Category