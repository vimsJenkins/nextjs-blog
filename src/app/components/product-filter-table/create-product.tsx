import { useState } from "react";

export default function CreateProduct({onCreateSuccess}: any) {
  const defaultProduct = {name: '', category: '', price: '', stocked: true};
  const [productRow, setProduct] = useState(defaultProduct);
  const handleSubmit = (event: any) => {
    event.preventDefault()
    onCreateSuccess(productRow)
    setProduct(defaultProduct)
  }
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct(values => ({...values, [name]: value}))
  }

  return (
    <form onSubmit={handleSubmit} className="create-product">
      <label htmlFor="name">
        Product name:
        <input
          type="text"
          name="name"
          placeholder="Enter Product name"
          value={productRow.name || ''}
          onChange={handleChange}
          />
      </label>
      <label htmlFor="price">
        Price:
        <input
          type="text"
          name="price"
          placeholder="Enter Product price"
          value={productRow.price || ''}
          onChange={handleChange}
          />
      </label>
      <label htmlFor="category">
        Category:
        <input
          type="text"
          name="category"
          value={productRow.category}
          placeholder="Enter Product Category."
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}