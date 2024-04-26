import About from "../About/About";
import Banner from "../Banner/Banner";
import FeaturedRooms from "../Featured/FeaturedRooms";
import NewsLetter from "../Newsletter/NewsLetter";
import Offers from "../Offers/Offers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <FeaturedRooms></FeaturedRooms>
      <Offers></Offers>
    </div>
  );
};

export default Home;
