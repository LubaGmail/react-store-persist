import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Product from '../../product/product'
import { selectCategories } from '../../../store/categories/categories.selector'

import {
    CategoryPreviewContainer,
    Title,
    Preview
} from './category-preview.styles'

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategories);
    // let hatArr = categoriesMap['hats']
    // {hats: Array(9), jackets: Array(5), mens: Array(6), ... }

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

