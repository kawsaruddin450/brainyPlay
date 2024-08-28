import { Helmet } from "react-helmet";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toy = useLoaderData();
    const { _id, seller, email, name, description, category, quantity, image, price, rating } = toy;
    return (
        <div>
            <Helmet>
                <title>BrainyPlay - Toy Details</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <h3 className="text-xl">Category: <span className="font-bold">{category}</span></h3>
                        <h3 className="text-xl">Seller: <span className="font-bold">{seller}</span></h3>
                        <h3 className="text-xl">Email: <span className="font-bold">{email}</span></h3>
                        <h3 className="text-xl mt-4">Available Quantity: <span className="font-bold">{quantity}</span></h3>
                        <h3 className="text-xl">Price: <span className="font-bold">${price}</span></h3>
                        <h3 className="text-xl">Rating: <span className="font-bold">
                            <span className="mx-3">{rating}</span>
                            <Rating
                                className="text-warning"
                                readonly
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                        </span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;