import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Search,
  Star,
  Users,
  Briefcase,
  CheckCircle,
  Shield,
} from "lucide-react";
const Home = () => {
  const navigate = useNavigate();
  const stats = [
    { value: "12,000+", label: "Developers" },
    { value: "8,500+", label: "Projects Done" },
    { value: "4.9★", label: "Avg Rating" },
    { value: "98%", label: "Client Satisfaction" },
  ];
  const topFreelancers = [
    {
      name: "Aryan Sharma",
      role: "Full Stack Developer",
      rating: 4.9,
      reviews: 128,
      price: "₹2,500/hr",
      initials: "AS",
      color: "#5B86E5",
    },
    {
      name: "Priya Mehta",
      role: "UI/UX Designer",
      rating: 4.8,
      reviews: 94,
      price: "₹1,800/hr",
      initials: "PM",
      color: "#36b37e",
    },
    {
      name: "Rahul Verma",
      role: "Backend Engineer",
      rating: 4.7,
      reviews: 76,
      price: "₹2,200/hr",
      initials: "RV",
      color: "#f76c6c",
    },
    {
      name: "Sneha Kapoor",
      role: "Mobile Developer",
      rating: 5.0,
      reviews: 52,
      price: "₹3,000/hr",
      initials: "SK",
      color: "#f7a440",
    },
  ];
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-[#5B86E5] text-white h-[25rem] py-4 px-6 flex flex-col items-center justify-center gap-3.5">
          <p className="text-5xl font-bold text-[#ffffff]">
            Hire Top Developers.
          </p>
          <p className="text-5xl font-bold text-[#eaeaead9]">
            Build Amazing Products.
          </p>
          <p className="text-md text-[#eaeaeaf0] w-[50%] text-center">
            DevConnect connects you with thousands of verified developers,
            designers, and engineers ready to bring your ideas to life.
          </p>
          <div className="mt-8 max-w-4xl w-[60%] mx-auto flex items-center bg-white rounded-xl px-4 py-3 gap-3 shadow-xl">
            <Search className="text-[#9d9d9d] shrink-0" size={20} />
            <input
              type="text"
              placeholder='Try "React developer", "UI designer", "Node.js expert"…'
              className="flex-1 text-black outline-none text-sm placeholder:text-[#9d9d9d] bg-transparent"
            />
            <button
              onClick={() => navigate("/explore")}
              className="bg-[#5B86E5] text-white text-sm px-6 py-2 rounded-lg hover:bg-[#3a67c0] cursor-pointer shrink-0 transition"
            >
              Search
            </button>
          </div>
        </div>
        <section className="bg-[#eef4ff] py-10 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-[#5B86E5]">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topFreelancers.map((f) => (
              <div
                key={f.name}
                className="bg-white border border-[#e8eeff] rounded-2xl p-6 hover:shadow-lg transition cursor-pointer group"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                  style={{ backgroundColor: f.color }}
                >
                  {f.initials}
                </div>
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#5B86E5] transition">
                  {f.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{f.role}</p>
                <div className="flex items-center gap-1 mt-3">
                  <Star size={13} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-semibold text-gray-700">
                    {f.rating}
                  </span>
                  <span className="text-xs text-gray-400">
                    ({f.reviews} reviews)
                  </span>
                </div>
                <p className="text-sm font-bold text-[#5B86E5] mt-3">
                  {f.price}
                </p>
                <button className="mt-4 w-full bg-[#eef4ff] text-[#5B86E5] text-xs font-semibold py-2 rounded-lg hover:bg-[#5B86E5] hover:text-white transition cursor-pointer">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#5B86E5] py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Briefcase className="text-[#c8d9ff] mx-auto mb-4" size={40} />
            <h2 className="text-2xl font-bold text-white">
              Are You a Developer?
            </h2>
            <p className="text-[#c8d9ff] text-sm mt-3 leading-relaxed">
              Join thousands of freelancers already earning on DevConnect. Set
              your own rates, choose your projects, and build your reputation.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={() => navigate("/become-a-developer")}
                className="bg-white text-[#5B86E5] text-sm font-semibold px-8 py-3 rounded-xl hover:bg-[#f0f4ff] transition cursor-pointer"
              >
                Become a Developer
              </button>
            </div>
          </div>
        </section>

        {/* ── Trust banner ── */}
        <section className="bg-[#eef4ff] py-10 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6 text-center">
            {[
              {
                icon: <CheckCircle size={22} className="text-[#5B86E5]" />,
                text: "Verified Profiles",
              },
              {
                icon: <Shield size={22} className="text-[#5B86E5]" />,
                text: "Secure Payments",
              },
              {
                icon: <Users size={22} className="text-[#5B86E5]" />,
                text: "24/7 Support",
              },
              {
                icon: <Star size={22} className="text-[#5B86E5]" />,
                text: "Quality Guaranteed",
              },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm font-semibold text-gray-700">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
