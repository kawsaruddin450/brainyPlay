import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaGoogle } from "react-icons/fa";


const Register = () => {
    const { register, googleLogin } = useContext(AuthContext);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
        register(name, email, password);
    }

    const handleGoogleSignIn = () => {
        googleLogin()
        .then(result => {
            const user = result.usr;
            console.log(user);
        }).catch(error => {
            console.log(error.code);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className=" bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                Already have an account? <Link to='/login' className="label-text-alt link link-hover text-orange-500 hover:text-orange-500">Login Now</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn bg-orange-500 hover:bg-orange-600 text-white" />
                        </div>
                        <div className="divider">OR</div>
                        <div className="text-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-orange-500 hover:bg-orange-500 hover:border-0"><FaGoogle></FaGoogle></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;