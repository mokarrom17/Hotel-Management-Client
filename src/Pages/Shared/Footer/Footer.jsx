import logo from "../../../assets/royal-hotel-high-resolution-logo.ico";
import { IoIosPaperPlane } from "react-icons/io";
const Footer = () => {
  return (
    <div>
      <div className=" text-center bg-[#ab8a62] p-16">
        <h2 className="font-extrabold text-6xl text-white mb-8">
          Subscribe Newsletter{" "}
        </h2>
        <div className="w-1/2 mx-auto">
          <form className="flex">
            <div className="form-control w-2/3 text-black">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="input bg-white rounded-none"
                required
              />
            </div>
            <div className="form-control w-1/3">
              <button className="btn rounded-none bg-black text-white">
                <IoIosPaperPlane /> Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer p-10 bg-black text-white ">
        <aside>
          <img className="rounded-full w-20" src={logo} alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
