import NavBar from "../../components/NavBar";

export default function Contact() {
    return (
        <div>
            <NavBar />
            <main className="p-10 text-center">
                <h1 className="text-4xl font-bold mb-4 text-red-600">Contact Us</h1>
                <p className="text-lg text-gray-700">
                    Reach out to me at clayclayclayokayclay@gmail.com
                </p>
                <h1 className="text-4xl font-bold mb-4 text-red-800">Complaint?</h1>
                <p>
                    Call 999-999-9999
                </p>
            </main>
        </div>
    );
}
