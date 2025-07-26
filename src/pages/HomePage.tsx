import { FeatureGrid } from "../components/home/FeatureGrid"
import ProductGrid from "../components/home/ProductGrid"

export const HomePage = () => {
    return (
        <>
        <FeatureGrid/>
        <ProductGrid title ="Nuevo drop" products={[{id:1 ,title:"hola"}]}/>

        <ProductGrid title ="Lo mas vendido" products={[{id:1 ,title:"hoa"}]}/>


        </>
    )
}
