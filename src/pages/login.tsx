import { Link } from "react-router-dom"
import loginImg from "../assets/loginImg.png"

const Login = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 bg-blue-600 p-8 flex flex-col justify-center items-center">
                    <div className="mb-8">
                        <img src={loginImg} className="w-80" alt="login-img" />
                    </div>
                    <h2 className="text-white text-3xl font-bold text-center">Welcome!</h2>
                    <p className="text-blue-100 text-center mt-4">Log in to access your dashboard and manage your account.</p>
                </div>

                <div className="w-full md:w-3/5 p-8 flex items-center justify-center">
                    <div className="max-w-md w-full">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Login to Your Account</h1>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label className="ml-2 block text-sm text-gray-900">Remember me</label>
                                </div>
                                <p className="text-center text-sm text-gray-600">
                                    Don't have an account?
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500"> Sign up</a>
                                </p>                            </div>
                            <div>
                                <Link to={"/chat"}>
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Sign in
                                    </button>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login