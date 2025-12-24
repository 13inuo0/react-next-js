import Image from "next/image";
import { Product } from "../types/products";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div >
        <h3>상품 이름: {product.name}</h3>
        <p>가격: {product.price.toLocaleString()}원</p>
        {/* <img src={product.image} alt={product.name} /> */}
        <Image src={product.image} alt={product.name} width={200} height={200} priority />
        <p>{product.description}</p>
      </div>
    </Link>
  );
}
