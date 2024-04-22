import { Link } from "react-router-dom";
import { FaComputer } from "react-icons/fa6";

const FeaturedRoom = ({ room }) => {
    const { image, type, price } = room;
    return (
        <div className="">
            <img className="rounded-lg h-[350px] w-full " src={image} alt="" />
            <div className="card m-4 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <Link className="card-title ">{type}</Link>
                    <h2 className="text-2xl text-[#aa8453]">{price}.00USD/Night</h2>
                    {/* <div className="flex justify-center gap-6">
                        <button className="px-5 py-2 rounded-lg border-2 border-[#d7d7d7] bg-[#e5e5e5]">Adult {adults}</button>
                        <button className=" px-5 py-2 rounded-lg border-2 border-[#d7d7d7] bg-[#e5e5e5]">Child {child}</button>
                    </div> */}
                    <div className="card-actions justify-center">
                        <Link className="btn px-5 py-2 bg-[#aa8453] text-white"> <FaComputer></FaComputer> Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRoom;