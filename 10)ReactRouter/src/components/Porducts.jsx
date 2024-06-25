import ProductCard from "./PorductCard"


export default function Products({products}) {

    return(<div className="flex flex-wrap items-center justify-center">
        {products.map((product) => <ProductCard key={product.id} product={product}/>)}
    </div>)
}