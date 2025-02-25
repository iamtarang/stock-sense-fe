import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signup from "../assets/signup.png";
import api from '../utils/api'

const SignUp = () => {
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validate passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const body = {
            email,
            username,
            password
        }

        setLoading(true);

        try {
            // const response = await fetch("", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         username: username,
            //         email: email,
            //         password: password,
            //     }),
            // });

            // if (!response.ok) {
            //     const errorData = await response.json();
            //     throw new Error(errorData.detail || "Registration failed");
            // }

            // Registration successful, now login
            // const loginResponse = await fetch("https://stocksense-c7qv.onrender.com/api/users/register/", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Access-Control-Allow-Origin": "*", // Allows all origins (must be handled by server)
            //         "Access-Control-Allow-Headers": "*",
            //     },
            //     body: JSON.stringify({
            //         username,
            //         email,
            //         password
            //     }),
            // });

            const loginResponse = await api.post("/api/users/register/", body)

            console.log(loginResponse);

            if (!loginResponse) {
                throw new Error("Account created but login failed.");
            }

            // const loginData = await loginResponse;

            // Store tokens
            // localStorage.setItem("accessToken", loginData.access);
            // localStorage.setItem("refreshToken", loginData.refresh);

            // Redirect to chat page
            navigate("/chat");
        } catch (err: any) {
            setError(err.message || "Registration failed. Please try again.");
            console.error("Registration error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Form Section - order-2 on mobile, normal on desktop */}
            <div className="w-full md:w-3/5 p-8 flex items-center justify-center order-2 md:order-1">
                <div className="max-w-md w-full">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Create an Account</h1>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
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
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                disabled={loading}
                            >
                                {loading ? "Creating Account..." : "Sign Up"}
                            </button>
                        </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?
                        <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 ml-1">Login</Link>
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
