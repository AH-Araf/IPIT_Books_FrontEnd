import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { saveSocialUser } from "../../api/user";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: 'user' }

                // Use saveSocialUser function from socialAPI.js to save the user
                saveSocialUser(saveUser)
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    .catch(error => {
                        console.error('Error saving social user:', error);
                    });
            })
            .catch(error => {
                console.error('Error signing in with Google:', error);
            });
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle e text-xl bg-red-200 text-red-500">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
