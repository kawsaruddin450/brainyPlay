import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className=" bg-base-100 w-full shadow-2xl">
                    <form className="card-body">
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
                            <button className="btn bg-orange-500 hover:bg-orange-600 text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;