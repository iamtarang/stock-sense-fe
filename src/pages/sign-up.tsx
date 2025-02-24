import signup from "../assets/signup.png"

const SignUp = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Form Section - order-2 on mobile, normal on desktop */}
            <div className="w-full md:w-3/5 p-8 flex items-center justify-center order-2 md:order-1">
                <div className="max-w-md w-full">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Create an Account</h1>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500 ml-1">Login</a>
                    </p>
                </div>
            </div>

            {/* Image Section - order-1 on mobile, normal on desktop */}
            <div className="w-full md:w-2/5 bg-blue-600 p-8 flex flex-col justify-center items-center order-1 md:order-2">
                <div className="mb-8">
                    <img src={signup} className="w-80" alt="login-img" />
                </div>
                <h2 className="text-white text-3xl font-bold text-center">Welcome!</h2>
                <p className="text-blue-100 text-center mt-4">Sign up to create an account for Stock Sense!</p>
            </div>
        </div>
    );
};

export default SignUp;