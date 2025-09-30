import NavBar from "../../components/NavBar";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <NavBar />
            <main className="p-10 text-center">
                <h1 className="text-4xl font-bold mb-4 text-green-600">About Us</h1>
                <p className="text-lg text-gray-700">
                    My name is Clay and I play sports and code. 
                </p>
                <div className="flex justify-center mt-6">
                    <Image
                        src="/athlete.jpg"   
                        alt="Athlete"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </main>
        </div>
    );
}
