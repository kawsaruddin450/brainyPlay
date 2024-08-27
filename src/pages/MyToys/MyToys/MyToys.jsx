import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import MyToysRow from '../MyToysRow/MyToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])
    return (
        <div className='lg:container mx-auto'>
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
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;