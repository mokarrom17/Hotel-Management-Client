import { Link } from "react-router-dom";

const FeaturedRoom = ({ room }) => {
    const { image, type, price, adults, child } = room;
    return (
        <div className="">
            <img className="rounded-lg h-[350px] w-full " src={image} alt="" />
            <div className="card w-96 bg-base-100 shadow-xl left-4 -top-12">
                <div className="card-body">
                    <Link className="card-title">{type}</Link>
                    <h2 className="text-2xl text-[#aa8453]">{price}.00USD/Night</h2>
                    <div className="text-center">
                        <button className="px-3 py-2 rounded-sm border-2 border-[#d7d7d7] bg-[#e5e5e5]">Adult {adults}</button>
                        <button className="ml-5 px-3 py-2 rounded-sm border-2 border-[#d7d7d7] bg-[#e5e5e5]">Child {child}</button>
                    </div>
                    <div className="card-actions justify-center">
                        <Link className="btn bg-[#aa8453] text-white">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRoom;