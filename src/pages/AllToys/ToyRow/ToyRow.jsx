import React from 'react';

const ToyRow = ({ toy }) => {
    const { image, name, description, quantity, price, category } = toy;
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
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ToyRow;