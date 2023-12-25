"use client"
import SearchBar from "./product-filter-table/search-bar";
import ProductTable from "./product-filter-table/product-table";
import CreateProduct from "./product-filter-table/create-product";
import { useState } from "react";
export default function ProdctFilterTable(props: any) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [products, setProducts] = useState(props.products.map((p: any) => {
    p.id = Date.parse(new Date().toString()) + Math.random().toString().slice(2)
    return p;
  }))
  const onCreateSuccess =(product: any) => {
    product.id = Date.parse(new Date().toString()) + Math.random().toString().slice(2)
    console.log(product.id)
    setProducts([...products, product])
  }
  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}/>
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
      <CreateProduct onCreateSuccess={onCreateSuccess}/>
    </div>
  );
}
