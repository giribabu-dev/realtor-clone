import { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";

import GoogleAuth from "../components/GoogleAuth";

function SignUp() {

    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)

    // Handle user data
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
            <h1 className="text-center mt-6 text-3xl font-bold">Sign Up</h1>

            <div className="flex flex-wrap items-center max-w-6xl mx-auto py-12 px-6">
                {/* Left side content */}
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img src="https://media.istockphoto.com/id/2162167863/photo/businessman-in-the-logging-in-using-a-secure-web-page.jpg?s=2048x2048&w=is&k=20&c=7-nEK3Wwy6arRcK70BKrD__ove_cnbCikkwe7vhLaX4="
                        alt="sign up" className="w-full rounded-2xl"
                    />
                </div>

                {/* Right side content */}
                <div className="w-full lg:ml-20 md:w-[67%] lg:w-[40%]">
                    <form>

                        {/* Full name */}
                        <input type="text" placeholder="Full name" name="fullName" value={userData.fullName}
                            className="w-full bg-white text-xl border-gray-300 px-4 py-2 text-gray-700 rounded"
                            onChange={handleUserData}
                        />

                        {/* Email address */}
                        <input type="email" placeholder="Email address" name="email" value={userData.email}
                            className="w-full bg-white text-xl px-4 py-2 text-gray-700 border-gray-300 rounded my-5"
                            onChange={handleUserData}
                        />

                        {/* Password */}
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={userData.password}
                                className="w-full bg-white text-xl px-4 py-2 text-gray-700 border-gray-300 rounded"
                                onChange={handleUserData}
                            />
                            {showPassword ? (
                                <IoEyeOff className="absolute top-3 right-3 cursor-pointer text-xl" onClick={handleShowPassword} />
                            ) : (
                                <IoEyeSharp className="absolute top-3 right-3 cursor-pointer text-xl" onClick={handleShowPassword} />
                            )
                            }
                        </div>
                        
                        {/* Sign-in & forgot password links */}
                        <div className="flex justify-between items-center my-5">
                            <p>Have an account? 
                                <Link to={'/sign-in'} className="text-red-500 ms-1">Sign in</Link>
                            </p>
                            <p>
                                <Link to={'/forgot-password'} className="text-blue-500">
                                    Forgot Password?
                                </Link>
                            </p>
                        </div>

                        {/* Sign up button */}
                        <button type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded text-sm font-medium uppercase cursor-pointer
                                hover:bg-blue-600 transition duration-200 ease-in-out"
                        >
                            Sign Up
                        </button>
                        
                        {/* Google authentication */}
                        <GoogleAuth />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp;
