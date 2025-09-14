import ToDoList from './ToDoList';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
    return (
        <div className="font-sans flex flex-col min-h-screen items-center">
            <Header />

            <main className="flex flex-wrap justify-center flex-1 p-6">
                <Card
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/330px-Pizza-3007395.jpg"
                    caption="Pizza"
                />
                <Card
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/250px-RedDot_Burger.jpg"
                    caption="Burger"
                />
                <Card
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Spaghettoni.jpg/250px-Spaghettoni.jpg"
                    caption="Spaghetti"
                />

            <div className="mt-8 w-full max-w-xl">
                <ToDoList />
            </div>
        </main>

            <Footer />
        </div>
    );
}
