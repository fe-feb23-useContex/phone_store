import { useState, useEffect, useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SortBar } from '../components/Catalog/SortBar';
import { ProductsList } from '../components/Catalog/ProductsList';
import { Pagination } from '../components/Pagination/Pagination';
import { CatalogProductData } from '../types/CatalogProductData';
import { getProducts } from '../api/phones';
import './PagesStyles/Catalog.scss';

export const Catalog = () => {
  const [products, setProducts] = useState<CatalogProductData[]>([]);
  const [totalPages, setTotalPages] = useState<null | number>(null);
  const [productsCount, setProductsCount] = useState<null | number>(null);
  const [searchParams] = useSearchParams();

  const paramsString = useLocation().search;

  const getCatalogContents = useCallback(async() => {
    try {
      const productsData = await getProducts(paramsString);
      const {
        products: productsFromServer,
        totalPages: pagesQuantity,
        totalCount: productsQuantity,
      } = productsData;

      setProductsCount(productsQuantity);
      setTotalPages(pagesQuantity);
      setProducts(productsFromServer);
    } catch {
      throw new Error('Server error');
    }
  }, [searchParams]);

  useEffect(() => {
    getCatalogContents();
  }, [searchParams]);

  return (
    <div className="catalogContent">
      <div className="categoryName">
        <h1 className="categoryName-text">Mobile phones</h1>
        {productsCount && (
          <p className="categoryName-quantity">{`${productsCount} models`}</p>
        )}
      </div>

      <SortBar />

      <ProductsList products={products} />

      {totalPages && <Pagination totalPages={totalPages} />}
    </div>
  );
};
