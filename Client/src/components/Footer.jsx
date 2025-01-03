import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img className="mb-5 w-32 " src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            officia sed suscipit? Labore cum fugiat, necessitatibus magnam
            maxime, eius voluptatibus repudiandae possimus expedita corporis
            perferendis a at, quam esse quae!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-slate-50">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-slate-50">
            <li>+1-212-456-7890</li>
            <li>contact@fabrica.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ fabrica.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
