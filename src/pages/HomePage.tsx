import { FeatureGrid } from "../components/home/FeatureGrid"
import ProductGrid from "../components/home/ProductGrid"
import { SampleProducts } from "../components/shared/SampleProducts"

export const HomePage = () => (
  <>
    <FeatureGrid />
    <ProductGrid title="Drop 001" products={SampleProducts} />
  </>
)