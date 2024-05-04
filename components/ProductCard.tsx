// components/ProductCard.tsx

interface Product {
    id: number;
    name: string;
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
        <img className="w-full h-48 object-cover object-center" src={product.image} alt={product.name} />
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-semibold">{product.name}</h2>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-900">${product.price}</span>
            <button className="px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded uppercase hover:bg-gray-700 focus:bg-gray-700 focus:outline-none">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  