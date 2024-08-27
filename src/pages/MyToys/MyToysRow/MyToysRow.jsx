import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyToysRow = ({toy, handleDelete}) => {
    const {_id, name, seller, email, category, rating, description, quantity, price, image} = toy;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=> handleDelete(_id)} className='btn btn-circle btn-sm text-xl'><MdDelete></MdDelete></button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-xl w-24 h-24">
                            <img
                                src={image}
                                alt="Toy Image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                {description}
                <br />
                <span className="badge badge-ghost badge-sm">Available: {quantity}</span>
            </td>
            <td>${price}</td>
            <th>
                <Link to={`/update/${_id}`} className="btn btn-ghost btn-xs">update</Link>
            </th>
        </tr>
    );
};

export default MyToysRow;