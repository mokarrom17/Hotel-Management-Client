import { useEffect } from "react";
import { useState } from "react";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div className="mb-12">
            <div className="text-center">
                <h3 className="text-5xl font-bold mb-4">Featured Rooms</h3>
                <p className="text-2xl">Every room type has many rooms. Anyone can send booking requrest from this site.</p>
            </div>
            <div>
                <h2>Rooms:{rooms.length}</h2>
            </div>
        </div>
    );
};

export default FeaturedRooms;