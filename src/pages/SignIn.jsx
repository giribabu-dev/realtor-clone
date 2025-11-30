import { useState } from "react";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

import GoogleAuth from "../components/GoogleAuth";

function SignIn() {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false)

    // Handle user form data
    const handleUserData = (e) => {
        const { name, value } = e.target;
        setUserData(prev => (
            { ...prev, [name]: value }
        ))
    };

    // Handle show password
    const handleShowPassword = () => setShowPassword(prev => !prev)

    return (
        <section>

            {/* Heading */}
            <h1 className="text-3xl text-center font-bold mt-6">Sign In</h1>

            <div className="flex flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">

                {/* Left side content */}
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img src="https://media.istockphoto.com/id/2162167863/photo/businessman-in-the-logging-in-using-a-secure-web-page.jpg?s=2048x2048&w=is&k=20&c=7-nEK3Wwy6arRcK70BKrD__ove_cnbCikkwe7vhLaX4="
                        alt="sign in"
                        className="w-full rounded-2xl"
                    />
                </div>

                {/* Right side content */}
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                    <form>

                        {/* Email address */}
                        <input type="email" name="email" placeholder="Email address" value={userData.email}
                            className="w-full bg-white px-4 py-2 text-xl text-gray-700 border-gray-300 rounded"
                            onChange={handleUserData}
                        />

                        {/* Password */}
                        <div className="relative my-6">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={userData.password}
                                className="w-full bg-white px-2 py-2 text-xl text-gray-700 border-gray-300 rounded"
                                onChange={handleUserData}
                            />
                            {showPassword ?
                                (<IoEyeOff className="absolute right-3 top-3 text-xl cursor-pointer" onClick={handleShowPassword} />)
                                :
                                (<IoEyeSharp className="absolute top-3 right-3 cursor-pointer text-xl" onClick={handleShowPassword} />)
                            }
                        </div>

                        {/* Sign up & forgot password links */}
                        <div className="flex justify-between whitespace-nowrap mb-5">
                            <p>Don't have an account?
                                <Link to={'/sign-up'}
                                    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ms-1">
                                    Register
                                </Link>
                            </p>
                            <p>
                                <Link to={'/forgot-password'}
                                    className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out">
                                    Forgot password?
                                </Link>
                            </p>
                        </div>

                        {/* Sign In button */}
                        <button
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer font-medium
                                text-sm transition duration-150 ease-in-out uppercase"
                        >
                            Sign In
                        </button>

                        {/* Google authentication */}
                        <GoogleAuth />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn;
