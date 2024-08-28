import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const params = useParams();
    const id = params.id;

    const toy = useLoaderData();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updated = {
            price,
            quantity,
            description,
        }

        fetch(`http://localhost:5000/toys/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updated),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "Updated this toy successfully.",
                        icon: "success"
                    });
                    form.reset();
                    navigate('/mytoys')
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>BrainyPlay - Update Toy</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update {toy?.name}</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
                        <form onSubmit={handleUpdate} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price (${toy?.price})</span>
                                </label>
                                <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Availabe Quantity ({toy?.quantity})</span>
                                </label>
                                <input type="number" placeholder="available quantity" name="quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description ({toy?.description})</span>
                                </label>
                                <textarea placeholder="Description..." name="description" className="input input-bordered w-full"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Update" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;