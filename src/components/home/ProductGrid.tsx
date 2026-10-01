import CardProduct from "../products/CardProduct"
interface Props{title:string;products:any[]}
const ProductGrid=({title,products}:Props)=><section className="my-24"><div className="mb-8"><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/35">DEMONY</p><h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">{title}</h2></div><div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">{products.map((product,index)=><CardProduct key={product.id||`${product.slug}-${index}`} {...product}/>)}</div></section>
export default ProductGrid