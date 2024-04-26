import NewsLetter from "../../../NewsLetter/NewsLetter";
import About from "../About/About";
import Banner from "../Banner/Banner";
import FeaturedRooms from "../Featured/FeaturedRooms";
import Offers from "../Offers/Offers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <FeaturedRooms></FeaturedRooms>
      <Offers></Offers>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
