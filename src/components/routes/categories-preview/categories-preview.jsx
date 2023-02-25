import { Link } from 'react-router-dom'
import { useContext } from 'react';

import { CategoriesContext } from '../../../contexts/categories-context';
import Product from '../../product/product'

import {
    CategoryPreviewContainer,
    Title,
    Preview
} from './category-preview.styles'

const CategoriesPreview = () => {

    // [ {items: [{id: 1, name: 'Brown Brim, ...}, {...}], title: 'hats'}, {…}, ...]
    const { categories } = useContext(CategoriesContext)    // obj to arr

    // { hats: Array(9), jackets: Array(5), mens: Array(6), ... }
    const categoriesMap = categories?.reduce((acc, el) => {
        const {title, items} = el
        acc[title.toLowerCase()] = items
        return acc
    }, {})
    
    return (
        <>
            {
                Object.keys(categoriesMap).map((title, i) => (
                    <CategoryPreviewContainer key={i}>
                        <Link to={`/shop/${title}`}>
                            <Title>{title.toUpperCase()}</Title>
                        </Link>
                        <Preview>
                            {
                                categoriesMap[title].map((p, i) => (
                                    <span key={i}>
                                        {i < 4 && <Product product={p} />}
                                    </span>
                                ))
                            }
                        </Preview>
                    </CategoryPreviewContainer>
                ) )
            }   
        </>
    )
}

export default CategoriesPreview 

