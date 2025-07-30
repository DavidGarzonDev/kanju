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
        <div className="w-full">
            <Link
                to={`/products/${slug}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="block"
            >
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-white">
                    <img
                        src={img}
                        alt={name}
                        className={`absolute inset-0 w-full h-80 object-cover transition-opacity duration-300 ${hovered && hoverImg ? 'opacity-0' : 'opacity-100'}`}
                    />
                    {hoverImg && (
                        <img
                            src={hoverImg}
                            alt={`${name} hover`}
                            className={`absolute inset-0 w-full h-80 object-cover transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
                        />
                    )}
                </div>
            </Link>

            <div className="mt-2 space-y-1 text-start">
                <p className="text-[17px] font-medium leading-none">{name}</p>
                <p className="text-gray-400 text-sm capitalize">{category}</p>
                <p className="text-lg font-semibold text-black">${price}</p>
                <p className="text-gray-400 text-sm capitalize">{color}</p>
                {!available && (
                    <span className="text-xs text-red-500">Sin stock</span>
                )}
            </div>
        </div>
    );
};

export default CardProduct;
