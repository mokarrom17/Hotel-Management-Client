import img from "../../assets/Hotel.jpg";
const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="">
      <div className="carousel w-full rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img} className="w-full m-6" />

          <div className="absolute h-full flex items-center justify-between w-full bg-gradient-to-r from-[#151515] to-[#00000000] ">
            <h2 className="text-white text-5xl ml-10 w-1/2 font-extrabold  ">
              SPEND YOUR BEAUTIFUL MOMENT WITH LUXURY.
            </h2>

            <form
              onSubmit={handleLogin}
              className="card-body border text-white  bg-white rounded-lg mr-32 "
            >
              <h1 className="text-5xl text-center text-black mb-5 font-bold">
                Login now!
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-black">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-black">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover font-bold text-black"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn font-bold text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
