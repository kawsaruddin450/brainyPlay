import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import MyToysRow from '../MyToysRow/MyToysRow';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://brainy-play-server.vercel.app/mytoys?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, []);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brainy-play-server.vercel.app/toys/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = toys.filter(toy => toy._id !== id);
                            const newToys = [...remaining];
                            setToys(newToys);
                        }
                    })
            }
        });

    }
    return (
        <div className='lg:container mx-auto'>
            <Helmet>
                <title>BrainyPlay - My Toys</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Info</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map(toy => <MyToysRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;