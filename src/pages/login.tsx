import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../assets/loginImg.png";
import api from "../utils/api";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from: string = location.state?.from?.pathname || "/chat";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [rememberMe, setRememberMe] = useState(true);

    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        const savedRememberMe = localStorage.getItem("rememberMe") === "true";
        
        if (savedUsername && savedRememberMe) {
            setUsername(savedUsername);
            setRememberMe(true);
        }
    
        const savedToken = localStorage.getItem("access_token");
        
        if (savedToken) {
            sessionStorage.setItem("access_token", savedToken);
            const savedUserId = localStorage.getItem("user_id");
            if (savedUserId) {
                sessionStorage.setItem("user_id", savedUserId);
                navigate(from, { replace: true });
            }
        }
    }, [navigate, from]);

    const handleCheckboxChange = () => {
        setRememberMe(prev => !prev);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await api.post('/api/users/login/', {
                username,
                password
            });
            
            if (!response?.data) {
                throw new Error("Invalid credentials");
            } else {
                // If remember me is checked, also store in localStorage
                if (rememberMe) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("rememberMe", "true");
                    localStorage.setItem("user_id", response?.data?.user_id);
                    localStorage.setItem("access_token", response?.data?.access);
                } else {
                    // Clear any previously saved credentials
                    localStorage.removeItem("username");
                    localStorage.removeItem("rememberMe");
                    localStorage.removeItem("user_id");
                    localStorage.removeItem("access_token");
                }

                navigate(from, { replace: true });
            }
        } catch (err) {
            setError("Login failed. Please check your credentials and try again.");
            console.error("Login error:", err);
        } finally {
            setLoading(false);
        }
    };

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
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                {error}
                            </div>
                        )}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center cursor-pointer" onClick={handleCheckboxChange}>
                                    <div
                                        className={`h-5 w-5 flex items-center justify-center border-2 rounded-md transition-all ${rememberMe ? "bg-blue-600 border-blue-600" : "border-gray-300"
                                            }`}
                                    >
                                        {rememberMe && (
                                            <svg
                                                className="w-4 h-4 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        )}
                                    </div>
                                    <label className="ml-2 block text-sm text-gray-900 cursor-pointer">
                                        Remember me
                                    </label>
                                </div>
                                <p className="text-center text-sm text-gray-600">
                                    Don't have an account?
                                    <Link to="/sign-up" className="font-medium text-blue-600 hover:text-blue-500 ml-1">Sign up</Link>
                                </p>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    disabled={loading}
                                >
                                    {loading ? "Signing in..." : "Sign in"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;