import { FeatureGrid } from "../components/home/FeatureGrid";
import ProductGrid from "../components/home/ProductGrid";
import { SampleProducts } from '../components/shared/SampleProducts'; 
export const HomePage = () => {
    

    return (<>
        <div className="flex flex-col gap-10 mt-0">
            <FeatureGrid />
            <ProductGrid title="Nuevo drop" products={SampleProducts} />
            
        </div>

        <div className=" -mt-30">
            <ProductGrid title="Lo más vendido" products={SampleProducts} />

        </div>
        </>
    );
};
