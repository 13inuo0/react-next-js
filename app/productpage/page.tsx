import ProductCard from "../components/ProductCard";
import { products } from "../data/product";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>상품페이지</h1>
      <div className="flex gap-4 justify-center">
        {products.map((item) => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </div>
    </div>
  );
}
