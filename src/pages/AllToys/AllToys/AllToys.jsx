import { useEffect, useState } from "react";
import ToyRow from "../ToyRow/ToyRow";
import { Helmet } from "react-helmet";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";


const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])

    const handleSorting = dir => {
        fetch(`http://localhost:5000/toys/sorted?sort=${dir}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    }

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
                            <th className="flex justify-around items-center">
                                <p>Price</p>
                                <p>
                                    <button onClick={()=> handleSorting(1)} className="block"><IoMdArrowDropup></IoMdArrowDropup></button>
                                    <button onClick={()=> handleSorting(0)} className="inline"><IoMdArrowDropdown></IoMdArrowDropdown></button>
                                </p>
                            </th>
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