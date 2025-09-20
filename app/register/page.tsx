"use client";

import React, { useState } from "react";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [submittedData, setSubmittedData] = useState<null | typeof formData>(
        null
    );
    
    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault(); 
        setSubmittedData(formData); 
        console.log("Form data ready to send:", formData);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Register</h1>
            
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
            >
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Register
                </button>
            </form>
            
            {submittedData && (
                <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-md w-full max-w-md">
                    <h2 className="text-lg font-semibold mb-2">
                        Stuff:
                    </h2>
                    <p><strong>Username:</strong> {submittedData.username}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Password:</strong> {submittedData.password}</p>
                </div>
            )}
        </div>
    );
}
