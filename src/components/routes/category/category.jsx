import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { selectCategories } from '../../../store/categories/categories.selector'
import Product from '../../product/product';

import {
    CategoryContainer,
    Title,
    ProductContainer
} from './category.styles'

const Category = () => {
    // routes/shop   <Route path=':category' element={<Category />} />
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategories)
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