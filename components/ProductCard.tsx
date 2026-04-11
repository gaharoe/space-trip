import { Product } from "@/types/types";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div key={product.id} className="flex flex-col items-center">
        <div className="mb-2 h-60 w-45 bg-gray-100 shrink-0 overflow-hidden rounded-lg border border-black/5">
          <img src={product.image} className="object-cover" />
        </div>
        <div className="w-full">
          <p className="font-bold">{product.name}</p>
          <p className="text-xs text-black-50">{product.category}</p>
          <p className="text-sm text-black-50 font-bold">Rp. {parseInt(product.price).toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
}
