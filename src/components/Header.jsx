import { useLocation, useNavigate } from "react-router-dom";

function Header() {

    const location = useLocation()
    const navigate = useNavigate()

    const isPathMatchRoute = (route) => {
        return route === location.pathname
    };

    return (
        <div className="bg-white border-b-0 shadow-sm sticky top-0 z-50">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto py-4">
                <div>
                    <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
                        alt="logo" className="h-5 cursor-pointer"
                        onClick={()=> navigate("/")}
                    />
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li className={`font-semibold text-sm text-gray-400 border-b-[3px] border-b-transparent cursor-pointer
                                ${isPathMatchRoute("/") && "text-black border-b-green-500"}`}
                            onClick={()=> navigate("/")}
                        >
                            Home
                        </li>
                        <li className={`text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer
                                ${isPathMatchRoute("/offers") && "text-black border-b-green-500"}`}
                            onClick={()=> navigate("/offers")}
                        >
                            Offers
                        </li>
                        <li className={`text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer
                                ${isPathMatchRoute("/sign-in") && "text-black border-b-green-500"}`}
                            onClick={()=> navigate("/sign-in")}
                        >
                            Sign In
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;