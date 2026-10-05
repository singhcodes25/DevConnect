import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#eef4ff] border-t-5 border-[#5b86e5]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo Section */}
        <div>
          <div className="flex items-center justify-center gap-1">
            <img src={logo} alt="Logo" className="h-[2.3rem]" />
            <h1 className="text-3xl font-bold text-[#5B86E5]">DevConnect</h1>
          </div>

          <p className="text-gray-700 mt-6 leading-8 text-sm">
            The best place to find skilled freelancers and get your work done.
          </p>

          {/* Social Icons */}
          <div className="flex gap-2 mt-8">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#5B86E5] hover:text-white transition">
              <FaFacebook w={20} />
            </div>

            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#5B86E5] hover:text-white transition">
              <FaTwitter w={20} />
            </div>

            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#5B86E5] hover:text-white transition">
              <FaLinkedin w={20} />
            </div>

            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#5B86E5] hover:text-white transition">
              <FaInstagram w={20} />
            </div>
          </div>
        </div>

        {/* Clients */}
        <div>
          <h2 className="text-2xl font-semibold text-[#5B86E5] mb-6">
            For Clients
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm">
            <li>Browse Freelancers</li>
            <li>Post a Project</li>
            <li>How it Works</li>
            <li>Plans & Pricing</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Freelancers */}
        <div>
          <h2 className="text-2xl font-semibold text-[#5B86E5] mb-6">
            For Freelancers
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm">
            <li>Browse Projects</li>
            <li>Become a Seller</li>
            <li>Freelancer Plans</li>
            <li>Success Stories</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-2xl font-semibold text-[#5B86E5] mb-6">
            Company
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-semibold text-[#5B86E5] mb-6">
            Subscribe
          </h2>

          <p className="text-gray-700 mb-6 text-sm">
            Get the latest updates and offers.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white border text-sm border-[#dbe7ff] rounded-xl focus:placeholder-transparent px-3 py-3 outline-none"
          />

          <button className="w-full mt-5 text-sm bg-[#5B86E5] text-white py-3 rounded-xl hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#5B86E5] py-6 text-center text-white">
        © {new Date().getFullYear()} DevConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
