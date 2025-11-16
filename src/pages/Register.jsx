import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { registerWithEmail, signinWithGoogle, setUser, setLoading } =
    use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;

    console.log(name, email, photourl, password);

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters long, and include at least one uppercase, one lowercase, and one special character."
      );
      return;
    }

    registerWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        setUser(user);
        setSuccess(true);
        navigate("/");
        toast("Account Creation Successful");
        e.target.reset();

        const profile = {
          displayName: name,
          photoURL: photourl,
        };

        updateProfile(user, profile)
          .then(() => {})
          .catch();

        const newUser = { name, email, photourl };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after user save", data);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast(errorMessage);
        setLoading(false);
        console.log(errorMessage);
      });
  };

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        setUser(user);
        setSuccess(true);
        navigate("/");
        toast("Account Creation Successful");

        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after user save", data);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast(errorMessage);
      });
  };
  return (
    <div className="hero bg-[#7a9352] min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center mt-6 poppins text-[#7a9352]">
          Join EcoTrack
        </h1>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photourl"
                className="input"
                placeholder="Photo Url"
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button
                  onClick={handleTogglePasswordShow}
                  className="btn btn-xs top-2 right-5 absolute"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          {error && <p className="text-red-500 text-xs">{error}</p>}

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="roboto">
            Already have an account?{" "}
            <span className="text-[#0049be] font-bold ">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
