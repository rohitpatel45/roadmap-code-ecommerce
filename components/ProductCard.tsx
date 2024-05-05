// components/ProductCard.tsx

import { Button } from "./ui/button";

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  }
  
  interface ProductCardProps {
    product: Product;
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-32 h-32 object-cover object-center" src={product.image} alt={product.title} />
        <div className="p-4">
          <h2 className="text-gray-800  font-serif text-sm ">{product.title}</h2>
          <p className="mt-2 text-gray-600 line-clamp-2">{product.description}</p>
          <div className="mt-4 flex items-center justify-between space-x-2">
            <span className="text-gray-900 text-sm">${product.price}</span>
            <Button variant="outline" className="px-3  py-1 bg-gray-800 text-white text-xs font-semibold rounded uppercase hover:bg-gray-700 focus:bg-gray-700 focus:outline-none">Add to Cart</Button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  