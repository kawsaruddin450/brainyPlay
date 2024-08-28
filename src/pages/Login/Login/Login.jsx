import { useContext } from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { Helmet } from "react-helmet";


const Login = () => {
    const { login, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.code);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className=" bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                Don't have an account? <Link to='/register' className="label-text-alt link link-hover text-orange-500 hover:text-orange-500">Register Now</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn bg-orange-500 hover:bg-orange-600 text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;