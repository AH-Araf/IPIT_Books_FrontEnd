import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import img from "../../assets/Image/login.jpg";
import Title from "../../ReuseableComponents/Title";
import Loader from "../Shared/Loader/Loader";
import SocialLogin from "./SocialLogin";

const PleaseLogin = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        // Simulate a 1000ms loader
        const timer = setTimeout(() => {
            setLoading(false); // Turn off loading after 1000ms
        }, 2000);

        // Cleanup function to clear the timer
        return () => clearTimeout(timer);
    }, []); // Run once on component mount

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
        <div>


            <div className="hero min-h-screen ">

                {loading ? ( // Render loader if loading is true
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <Loader />
                    </div>
                ) : (

                    <div>
                        <Title a="Please Login First" b="red" />
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center md:w-1/2 lg:text-left">
                                <img
                                    className="card e w-96 h-[400px]"
                                    src={img}
                                    alt=""
                                />
                            </div>
                            <div className="card border-2 border-white w-full md:w-1/2 max-w-sm e bg-base-100 h-[400px]">
                                <form
                                    onSubmit={handleLogin}
                                    className="card-body"
                                >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">
                                                Email
                                            </span>
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
                                            <span className="label-text">
                                                Password
                                            </span>
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            className="input input-bordered"
                                        />
                                        <label className="label">
                                            <a
                                                href="#"
                                                className="label-text-alt link link-hover"
                                            >
                                                Forgot password?
                                            </a>
                                        </label>
                                    </div>

                                    <input
                                        className="btn e btn-success"
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
                                </form>

                                    <SocialLogin />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PleaseLogin;
