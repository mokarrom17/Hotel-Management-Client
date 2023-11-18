import { useEffect } from "react";
import { useState } from "react";
import FeaturedRoom from "./FeaturedRoom";

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
            <div className="grid grid-cols-3 gap-5 mt-6">

                {
                    rooms.map(room => <FeaturedRoom
                        key={room._id}
                        room={room}
                    ></FeaturedRoom>)
                }
            </div>
        </div>
    );
};

export default FeaturedRooms;