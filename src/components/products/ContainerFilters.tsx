import Separator from '../shared/Separator';
import { FaCheck } from 'react-icons/fa';

const avaibleFilters = ["camiseta", "oversize", "sudadera"];

export const ContainerFilters = () => {
    return (
        <div className="p-6 border border-gray-200 bg-white rounded-2xl shadow-sm h-fit col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-2xl mb-4 text-gray-900">Filtros</h3>
            <Separator />

            <div className="flex flex-col gap-4 mt-4">
                {avaibleFilters.map((filter) => (
                    <label
                        key={filter}
                        className="flex items-center gap-3 cursor-pointer transition hover:bg-gray-100 p-2 rounded-xl"
                    >
                        <input
                            type="checkbox"
                            className="peer hidden"
                            id={filter}
                            name={filter}
                        />
                        <div className="w-5 h-5 border-2 border-black rounded-sm flex items-center justify-center peer-checked:bg-black peer-checked:text-white transition-all">
                            <FaCheck className="text-[10px] opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm text-gray-800 capitalize">{filter}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};
