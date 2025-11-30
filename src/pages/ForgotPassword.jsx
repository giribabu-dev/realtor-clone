import { useState } from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "../components/GoogleAuth";

function ForgotPassword() {

    const [email, setEmail] = useState('')

    return (
        <section>

            {/* Heading */}
            <h1 className="text-center mt-6 text-3xl font-bold">Forgot Password</h1>

            <div className="flex items-center flex-wrap max-w-6xl px-6 py-12 mx-auto">
                {/* Left side content */}
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img src="https://media.istockphoto.com/id/2162167863/photo/businessman-in-the-logging-in-using-a-secure-web-page.jpg?s=2048x2048&w=is&k=20&c=7-nEK3Wwy6arRcK70BKrD__ove_cnbCikkwe7vhLaX4="
                        alt="forgot password" className="w-full rounded-2xl"
                    />
                </div>

                {/* Right side content */}
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ms-20">
                    <form>

                        {/* Email address */}
                        <input
                            type="email" name="email" placeholder="Email address" value={email}
                            className="w-full rounded border-gray-300 text-gray-700 bg-white px-4 py-2 text-xl"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* Signup & signin links */}
                        <div className="flex justify-between my-5 whitespace-nowrap">
                            <p>
                                Don't have an account?
                                <Link to={'/sign-up'} 
                                    className="text-red-600 ms-1 hover:text-red-700 transition duration-200 ease-in-out"
                                >
                                    Register
                                </Link>
                            </p>
                            <p>
                                <Link to={'/sign-in'}
                                    className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out"
                                >
                                    Sign in instead
                                </Link>
                            </p>
                        </div>

                        {/* Reset email button */}
                        <button type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded uppercase font-medium cursor-pointer text-sm
                                hover:bg-blue-600 transition duration-200 ease-in-out"
                        >
                            Send Reset Email
                        </button>

                        {/* Google authentication */}
                        <GoogleAuth />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;
