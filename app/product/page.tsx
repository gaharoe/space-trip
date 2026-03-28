
import ProductCard from "@/components/ProductCard"
import ProductContainer from "@/components/ProductContainer"

export default async function Page(){
    const requestProducts = await fetch("http://localhost:3000/api/product")
    const productGroup = await requestProducts.json()
    
    return (
        <div className="pt-20">
            {productGroup.map((item: any) => (
                <ProductContainer key={item.category} category={item.category}>
                    {item.product.map((p: any) => (
                        <ProductCard key={p.id} product={p}/>
                    ))}
                </ProductContainer>
            ))}
        </div>
    )
}   