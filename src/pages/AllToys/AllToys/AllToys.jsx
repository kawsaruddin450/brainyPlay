import { useEffect, useState } from "react";
import ToyRow from "../ToyRow/ToyRow";
import { Helmet } from "react-helmet";


const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])

    console.log(toys);

    return (
        <div className="lg:container mx-auto">
            <Helmet>
                <title>BrainyPlay - All Toys</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Availability</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            ></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;