import { FcGoogle } from "react-icons/fc";

function GoogleAuth() {
    return (
        <>
            <div 
                className="my-4 flex items-center before:border-t-2 before:flex-1 before:border-gray-300
                    after:border-t-2 after:flex-1 after:border-gray-300"
            
            >
                <p className="text-center font-medium mx-3">OR</p>
            </div>
            <button
                className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded text-sm font-medium
                uppercase cursor-pointer hover:bg-red-600 transition duration-200 ease-in-out"
            >
                <FcGoogle className="me-1 bg-white rounded-2xl p-0.5 text-2xl" /> 
                Continue with Google
            </button>
        </>
    )
}

export default GoogleAuth;