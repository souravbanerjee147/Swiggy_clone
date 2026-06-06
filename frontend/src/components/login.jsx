// login.jsx
import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";

function Login(props) {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signedup, setSignedup] = useState(true);
    
    const navigate = useNavigate();
    // for authentication check in handleAddItem function block of resturantDetailAPI.jsx
    const { login } = useContext(AuthContext)
    


    const handleregister = async (e) => {
        e.preventDefault(); // Stops the browser from triggering a 404 page reload
        try {
            const response = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: fullName, email: email, password: password }),
            });

            const res = await response.json();
            console.log("Response from backend:", res);

            if (response.ok) {
                alert("Registration Successful!");
                setFullName("");
                setEmail("");
                setPassword("");
                setSignedup(true); // Switch view to login screen layout smoothly
            } else {
                alert(res.message || "Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Registration failed. Please try again.");
        }
    };

    const handlelog = async (e) => {
        e.preventDefault(); // Stops the browser from triggering a 404 page reload
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password }),
            });

            const data = await response.json();
            console.log("Login data back:", data);

            if (response.ok) {
                alert("Login Successful!");
                // localStorage.setItem("token", data.accessToken);

                // Call the login function from AuthContext with the access token to update global auth state
                login(data.accessToken);
                setEmail("");
                setPassword("");
                navigate("/")
            }
            else {
                alert(data.message || "Login failed: Invalid credentials.");
            }
        } catch (error) {
            console.log("Error during login:", error);
            alert("Login failed. Please check your network connection.");
        }
    };




    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" className="mx-auto h-10 w-auto" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={signedup ? handlelog : handleregister}>
                    {!signedup && (
                        <div>
                            <label htmlFor="full-name" className="block text-sm/6 font-medium text-gray-900">Full Name</label>
                            <div className="mt-2">
                                <input id="full-name" name="full-name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>


                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        {/* 1. Dynamic Prefix Text */}
                        {signedup ? "Not registered? " : "Already have an account? "}

                        <a
                            href="#"
                            className="text-blue-700 hover:underline dark:text-blue-500"
                            onClick={(e) => {
                                e.preventDefault(); // Prevents the page from jumping up to the top because of href="#"
                                setSignedup(!signedup); // Toggles the boolean state cleanly (true -> false -> true)
                            }}
                        >
                            {/* 2. Dynamic Anchor Link Text */}
                            {signedup ? "Create account" : "Login"}
                        </a>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {signedup ? "Log In" : "Register Account"}
                        </button>
                    </div>

                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Forget your password?{" "}
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Reset it</a>
                </p>
                
            </div>
        </div>

    )
}

export default Login;