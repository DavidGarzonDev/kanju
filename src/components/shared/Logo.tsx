import { Link } from "react-router-dom"


export const Logo = () => {
    return (
        <Link to="/" className={`text-2xl font-bold tracking-tighter transition-all space-x-1`}>
            <p className="hidden lg:block">
                K A N J U 
                
            </p>

            <p className="flex text-4xl lg:hidden">
                <span className="-skew-x-6">
                    K A N J U
                </span>
                
            </p>
        </Link>
    )
}
