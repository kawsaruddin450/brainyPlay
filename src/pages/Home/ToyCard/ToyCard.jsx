import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";


const ToyCard = ({ toy }) => {
    const { name, id, category, description, image, price, rating, quantity } = toy;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Toy" />
            </figure>
            <div className="p-5">
                <h2 className="card-title mt-3">{name}</h2>
                <p className="my-3">{description}</p>
                <p className="text-xl">Category: {category}</p>
                <div className="flex justify-between text-xl my-3">
                    <p className="font-bold">Price: <span>${price}</span></p>
                    <p>
                        <span className=" mr-4">{rating}</span>
                        <span>
                            <Rating
                                className="text-warning"
                                readonly
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                        </span>
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-0">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;