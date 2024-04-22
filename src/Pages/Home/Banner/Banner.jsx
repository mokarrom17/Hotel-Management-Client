import banner1 from '../../../assets/Hotel.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full m-6j" />
                    <div className="absolute h-full flex items-end  w-full text-center bg-gradient-to-r from-[#151515] to-[#00000000] ">
                        <div className='pl-20 pb-20'>
                            <h2 className='text-white text-6xl font-extrabold  '>SPEND YOUR BEAUTIFUL <br /> MOMENT</h2>
                            <div className='grid grid-cols-5 gap-6  p-6 max-w-6xl mx-auto rounded-lg border mt-5'>
                                <input className='p-4  rounded-lg' type="date" placeholder='Arrival Time' value='Arrival Time' />
                                <input className='p-4 rounded-lg' type="date" placeholder='Departure Time' />
                                <input className='p-4 rounded-lg' type="number" placeholder='Adults' />
                                <input className='p-4 rounded-lg' type="number" placeholder='Child' />
                                <input className='p-4 rounded-lg bg-[#aa8453] text-white' type="submit" value="CHECK AVAILABLE" />

                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Banner;