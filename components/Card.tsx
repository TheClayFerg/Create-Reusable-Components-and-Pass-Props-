type CardProps = {
    image: string;
    caption: string;
};

export default function Card({ image, caption }: CardProps) {
    return (
        <div className="border rounded-lg shadow-md p-4 w-60 m-4">
            <img
                src={image}
                alt={caption}
                className="w-full h-40 object-cover rounded"
            />
            <p className="mt-2 text-center">{caption}</p>
        </div>
    );
}
