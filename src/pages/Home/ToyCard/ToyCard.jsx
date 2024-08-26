

const ToyCard = ({ toy }) => {
    const { name, id, category, description, image, price, rating, quantity } = toy;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Toy" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-0">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;