import React from 'react';

const MyToysRow = ({toy}) => {
    const {_id, name, seller, email, category, rating, description, quantity, price, image} = toy;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
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
                <button className="btn btn-ghost btn-xs">update</button>
            </th>
        </tr>
    );
};

export default MyToysRow;