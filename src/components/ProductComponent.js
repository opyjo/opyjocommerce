import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Component render all the products.
const ProductComponent = () => {
  // useSelector extract the products from the store to display
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, image, price, category } = product;
    const producttext = product.title.length;
    if (producttext > 25) {
      product.title = product.title.slice(0, 15);
    }
    console.log(product.title);
    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
          <div className="max-w-xs bg-gray-50 hover:border-violet-600 shadow-lg rounded-lg overflow-hidden my-10   border-2 hover:border-current ">
            <div className="px-4 py-2">
              <h1 className="text-gray-900 font-bold text-sm uppercase">
                {category}
              </h1>
              <p className="text-gray-600 text-sm mt-1">{product.title}</p>
            </div>
            <img
              className="h-56 w-full object-contain mt-2"
              src={image}
              alt={product.title}
            />
            <div className="flex items-center  ">
              <h1 className="text-black-100 font-bold text-xl">${price}</h1>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
