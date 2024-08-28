import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;

        const seller = form.seller.value;
        const email = form.email.value;
        const name = form.name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;

        const toy = {
            seller,
            email,
            name,
            category,
            quantity,
            price,
            rating,
            image,
            description,
        }
        console.log(toy);

        fetch('https://brainy-play-server.vercel.app/addtoys', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(toy)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "Toy Added Successfully.",
                        icon: "success"
                    });
                    form.reset();
                }
            });
    }

    return (
        <div>
            <Helmet>
                <title>BrainyPlay - Add a Toy</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Add a Toy!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={handleAddToy} className="card-body">
                            <div className="space-x-4">
                                <input type="name" placeholder="your name" name='seller' value={user?.displayName} className="input input-bordered" required />
                                <input type="email" placeholder="email" name='email' value={user?.email} className="input input-bordered" readOnly required />
                            </div>
                            <div className="space-x-4">
                                <input type="text" placeholder="toy name" name='name' className="input input-bordered" required />
                                <input type="text" placeholder="category" name='category' className="input input-bordered" required />
                            </div>
                            <div className="space-x-4">
                                <input type="number" placeholder="quantity" name='quantity' className="input input-bordered" required />
                                <input type="number" placeholder="price" name='price' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="rating" name='rating' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="image url" name='image' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <textarea rows="" name='description' placeholder='Toy Details...' className='input input-bordered'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value="Add" className="btn bg-orange-500 hover:bg-orange-600 text-white" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;