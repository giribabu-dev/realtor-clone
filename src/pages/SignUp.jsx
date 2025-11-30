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

    const handleUserData = (e) => {
        const { name, value } = e.target;
        setUserData(prev => (
            { ...prev, [name]: value }
        ))
    };

    const handleShowPassword = () => setShowPassword(prev => !prev)

    return (
        <section>
            <h1 className="text-center mt-6 text-3xl font-bold">Sign Up</h1>

            <div className="flex justify-center flex-wrap max-w-6xl mx-auto py-12 px-6">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img src="https://media.istockphoto.com/id/2162167863/photo/businessman-in-the-logging-in-using-a-secure-web-page.jpg?s=2048x2048&w=is&k=20&c=7-nEK3Wwy6arRcK70BKrD__ove_cnbCikkwe7vhLaX4="
                        alt="sign up" className="w-full rounded-2xl"
                    />
                </div>
                <div className="w-full lg:ml-20 md:w-[67%] lg:w-[40%]">
                    <form>
                        {/* Full name */}
                        <input type="text" placeholder="Full name" name="fullName" value={userData.fullName}
                            className="w-full bg-white text-xl border-gray-300 px-4 py-2 text-gray-700 rounded transition ease-in-out"
                            onChange={handleUserData}
                        />

                        {/* Email address */}
                        <input type="email" placeholder="Email address" name="email" value={userData.email}
                            className="w-full bg-white text-xl px-4 py-2 text-gray-700 border-gray-300 rounded transition ease-in-out my-5"
                            onChange={handleUserData}
                        />

                        {/* Password */}
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={userData.password}
                                className="w-full bg-white text-xl px-4 py-2 text-gray-700 border-gray-300 rounded transition ease-in-out"
                                onChange={handleUserData}
                            />
                            {showPassword ? (
                                <IoEyeOff className="absolute top-3 right-3 cursor-pointer text-xl" onClick={handleShowPassword} />
                            ) : (
                                <IoEyeSharp className="absolute top-3 right-3 cursor-pointer text-xl" onClick={handleShowPassword} />
                            )
                            }
                        </div>

                        <div className="flex justify-between items-center my-5 text-sm md:text-xl">
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
                            className="w-full bg-blue-500 text-white py-3 rounded text-sm font-medium uppercase cursor-pointer
                                hover:bg-blue-600 transition duration-200 ease-in-out"
                        >
                            Sign Up
                        </button>

                        <GoogleAuth />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp;
