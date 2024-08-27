import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy }) => {
    const {_id, image, name, description, quantity, price, category, seller, email } = toy;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="h-24 w-24 rounded-xl">
                            <img
                                src={image}
                                alt="Toy image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">Availale: {quantity}</div>
                    <div className="text-sm opacity-50">{category}</div>
                </div>
            </td>
            <td>
                {seller}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>${price}</td>
            <th>
                <Link to={`/toys/${_id}`} className="btn btn-ghost btn-xs">details</Link>
            </th>
        </tr>
    );
};

export default ToyRow;