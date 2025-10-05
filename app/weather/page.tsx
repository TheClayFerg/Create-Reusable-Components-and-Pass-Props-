'use client';

import { useState, useEffect } from "react";

interface WeatherData {
    temperature: number;
    weather_descriptions: string[];
    humidity: number;
    feelslike: number;
    wind_speed: number;
    observation_time: string;
}

interface WeatherResponse {
    location: {
        name: string;
        country: string;
        region: string;
    };
    current: WeatherData;
}

export default function Home() {
    const [weather, setWeather] = useState<WeatherResponse | null>(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch(
                    `http://api.weatherstack.com/current?access_key=${process.env.NEXT_PUBLIC_API_KEY}&query=Des Moines`
                );
                const data = await response.json();
                setWeather(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        }

        fetchWeather();
    }, []);

    if (!weather) {
        return (
            <div className="flex justify-center items-center h-screen text-xl">
                Loading the weather
            </div>
        );
    }

    const { location, current } = weather;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">
                🌤️ Weather in {location.name}, {location.region}
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
                <p className="text-xl font-semibold mb-2">
                    {current.weather_descriptions[0]}
                </p>
                <p className="text-5xl font-bold text-blue-500 mb-4">
                    {current.temperature}°C
                </p>
                <p className="text-gray-600 mb-2">Feels Like: {current.feelslike}°C</p>
                <p className="text-gray-600 mb-2">Humidity: {current.humidity}%</p>
                <p className="text-gray-600">Wind Speed: {current.wind_speed} km/h</p>
                <p className="text-sm text-gray-400 mt-4">
                    Last updated: {current.observation_time}
                </p>
            </div>
        </div>
    );
}
