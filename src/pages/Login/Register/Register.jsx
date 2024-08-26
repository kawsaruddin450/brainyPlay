import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";


const Register = () => {
    const {register, loading} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
        register(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;