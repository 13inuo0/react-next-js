import { products } from "@/app/data/product";
import { Product } from "@/app/types/products";
import Image from "next/image";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item: Product) => item.id === Number(id));
  if (!product) return <div>상품이 없습니다.</div>;
  return (
    <div>
      <h3>상품 이름: {product.name}</h3>
      <p>가격: {product.price.toLocaleString()}원</p>
      {/* <img src={product.image} alt={product.name} /> */}
      <Image src={product.image} alt={product.name} width={200} height={200} priority />
      <p>{product.description}</p>
    </div>
  );
}
