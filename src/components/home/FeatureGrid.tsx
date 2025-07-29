import { MdLocalShipping, MdReplay, MdVerified, MdCardGiftcard } from "react-icons/md";

const features = [
    {
        icon: <MdLocalShipping size={40} className="text-black" />,
        title: "Envío gratis",
        description: "En tu primera compra",
    },
    {
        icon: <MdReplay size={40} className="text-black" />,
        title: "Devoluciones fáciles",
        description: "Hasta 30 días",
    },
    {
        icon: <MdVerified size={40} className="text-black" />,
        title: "Garantía asegurada",
        description: "Productos verificados",
    },
    {
        icon: <MdCardGiftcard size={40} className="text-black" />,
        title: "Regalos y promociones",
        description: "Exclusivas online",
    },
];

export const FeatureGrid = () => {
    return (
        <div className="grid gap-8 mt-6 -mb-25 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-6">
                    {feature.icon}
                    <div className="space-y-1">
                        <p className="font-semibold">{feature.title}</p>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
