import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    selectCategoriesMap,
    selectCategoriesIsLoading,
} from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';
import ProductCard from '../../components/product-card/product-card';
import { CategoryContainer, Title } from './category.styles';

import './category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    const isLoading = useSelector(selectCategoriesIsLoading);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            )}
        </Fragment>
    );
};

export default Category;