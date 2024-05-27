import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import img from "../../assets/Image/login.jpg"
import SocialLogin from "./SocialLogin";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password);
            const user = result.user;
            console.log(user);

            Swal.fire({
                title: "User Login Successful.",
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
            });

            navigate("/");
        } catch (error) {
            console.error("Login error:", error);

            Swal.fire({
                title: "Error",
                text: "Invalid email or password. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="hero min-h-screen ">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <img
                        className="card e w-96 h-[515px]"
                        src={img}
                        alt=""
                    />
                </div>

                <div className="card border-2 border-white w-full md:w-1/2 max-w-sm e bg-base-100 h-[515px]">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full pr-10"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    {showPassword ? (
                                        <FiEyeOff onClick={handleTogglePassword} className="text-slate-700 cursor-pointer" />
                                    ) : (
                                            <FiEye onClick={handleTogglePassword} className="text-slate-700 cursor-pointer" />
                                    )}
                                </div>
                            </div>
                        </div>

                        <input
                            className="btn e btn-success mt-4"
                            type="submit"
                            value="Login"
                        />
                        <p>
                            <small>
                                New Here?{" "}
                                <Link to="/register">
                                    <span className="text-blue-700 font-bold">
                                        Create an account
                                    </span>
                                </Link>
                            </small>
                        </p>
                        <div>
                            <p className="font-bold text-sm text-red-600"><u>Admin Login (Demo)</u></p>
                            <p className="font-bold text-sm"><span className="text-green-600"><u>Email:</u> </span>admin123@gmail.com</p>
                            <p className="font-bold text-sm"><span className="text-green-600"><u>Password:</u> </span>Admin#@321</p>
                        </div>
                        
                    </form>
                    <SocialLogin />

                </div>
            </div>
        </div>
    );
};

export default Login;
