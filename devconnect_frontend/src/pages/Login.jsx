import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        data,
        {
          withCredentials: true,
        },
      );

      if (res.data.userId) {
        localStorage.setItem("userId", res.data.userId);
      }
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <button
        onClick={() => navigate("/home")}
        className="absolute top-6 left-6 flex items-center gap-2 text-[#ffffff] transition cursor-pointer"
      >
        <ArrowLeft size={22} />
        <span className="font-medium">Back</span>
      </button>
      <div className="flex items-center justify-center h-screen bg-[#5B86E5]">
        <div className="h-[80%] w-[60rem] flex justify-end bg-[#b4ccff]">
          <div className="grid place-items-center w-[20rem]">
            <img src={logo} alt="Logo" className="h-[15rem] text-center" />
          </div>
          <div className="w-[40rem] rounded-l-3xl bg-[#ffffff] flex items-center justify-center">
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex items-center flex-col gap-4 mt-5"
              >
                <h2 className="text-xl font-bold grid">Sign-in</h2>
                <input
                  name="email"
                  className="border-b border-[#9d9d9d] text-sm focus:placeholder-transparent focus:outline-none placeholder:text-[#9d9d9d] h-[2.4rem] w-[17rem]"
                  type="text"
                  placeholder="Email"
                />
                <input
                  name="password"
                  className="border-b border-[#9d9d9d] text-sm focus:placeholder-transparent focus:outline-none placeholder:text-[#9d9d9d] h-[2.4rem] w-[17rem]"
                  type="text"
                  placeholder="Password"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div>
                  <p className="text-sm text-[#9d9d9d]">
                    If you are a developer login with same credentials!
                  </p>
                </div>
                <button
                  type="submit"
                  className="bg-[#5B86E5] text-sm text-white h-[2rem] w-[17rem] cursor-pointer text-center rounded-md hover:bg-[#3a67c0]"
                >
                  Login
                </button>
                <div>
                  <p className="text-sm text-[#9d9d9d]">
                    Don't have an account?{" "}
                    <span className="text-[#5B86E5] cursor-pointer">
                      <a href="/signup">Signup Here</a>
                    </span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="bg-[#ffffff] text-sm text-[#9d9d9d] h-[2rem] w-[12rem] cursor-pointer text-center rounded-md border border-[#9d9d9d] hover:bg-[#f0f0f0]">
                    Google
                  </button>
                  <button className="bg-[#ffffff] text-sm text-[#9d9d9d] h-[2rem] w-[12rem] cursor-pointer text-center rounded-md border border-[#9d9d9d] hover:bg-[#f0f0f0]">
                    Github
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
