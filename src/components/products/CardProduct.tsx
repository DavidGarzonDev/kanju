import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
    img: string; 
    hoverImg?: string; 
    name: string;
    price: number;
    slug: string;
    color: string;
    sizes: Record<string, number>;
    category: string;
}

const CardProduct = ({
    img,
    hoverImg,
    name,
    price,
    slug,
    color,
    sizes,
    category,
}: Props) => {
    const available = Object.values(sizes).some((stock) => stock > 0);
    const [hovered, setHovered] = useState(false);

    return (
        <div className="flex flex-col gap-1 relative mt-10">
            <Link
                to={`/products/${slug}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="flex flex-col"
            >
                <div className="w-full h-120 flex items-center justify-center ">
                    <img
                        src={hovered && hoverImg ? hoverImg : img}
                        alt={name}
                        className="w-full h-full object-cover transition-all duration-300"
                    />
                </div>
                
            </Link>

            <div className="flex flex-col gap-1 items-start text-center">
                <p className="text-[17px] font-medium">{name}</p>
                <p className="text-gray-400 text-sm capitalize">{category}</p>
                <p className="text-1xl font-medium text-black">${price}</p>
                <p className="text-gray-400 text-sm capitalize">{color}</p>
                {!available && (
                    <span className="text-xs text-red-500 mt-1">Sin stock</span>
                )}
            </div>
        </div>
    );
};

export default CardProduct;
