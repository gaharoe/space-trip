import ProductCard from "@/components/ProductCard";
import ProductContainer from "@/components/ProductContainer";
import SearchBar from "@/components/SearchBar";
import fs from "fs";

export default async function Page() {
  // const requestProducts = await fetch("http://localhost:3000/api/product")
  // const productGroup = await requestProducts.json()
  const productGroup = JSON.parse(
    fs.readFileSync(`${process.cwd()}/public/products.json`, "utf-8"),
  );

  return (
    <div className="px-5 pt-3">
      {productGroup.map((item: any) => (
        <ProductContainer key={item.category} category={item.category}>
          {item.product.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </ProductContainer>
      ))}
    </div>
  );
}
