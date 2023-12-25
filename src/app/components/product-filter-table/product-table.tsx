import ProductCategory from './product-table/product-category';
import ProductRow from './product-table/product-row'; 
export default function ProductTable({ products, filterText, inStockOnly }: any) {
  const rows: any = [];
  const categoryProducts: any = {};

  products.forEach((product: any) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if(!categoryProducts[product.category]) {
      categoryProducts[product.category] = [product]
    } else {
      categoryProducts[product.category].push(product)
    }
  });

  Object.keys(categoryProducts).forEach((category) => {
    rows.push(
      <ProductCategory
        category={category}
        key={category} />
    );
    categoryProducts[category].forEach((product: any) => {
      rows.push(
        <ProductRow
          product={product}
          key={product.id} />
      );
    })
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}