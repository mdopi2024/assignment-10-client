import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Update from '../Pages/Update';

const MyAddedVisaCard = ({ addeVisa }) => {
    const { _id, name, photo, visaType, discrip, time, fee, validity, method } = addeVisa;
    const [update, setUpdate] = useState({});

    const hanaleModal = (visa) => {
        setUpdate(visa); // Set the data for the modal.
        document.getElementById(`modal_${_id}`).showModal(); // Use unique ID for modal.
    };

    return (
        <div className="card card-compact bg-[#D1E7FD] shadow-xl mt-5 border">
            <div>
                <Update update={update}></Update>
            </div>
            <figure>
                <img
                    className="w-full h-[200px] object-cover"
                    src={photo}
                    alt={name}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    <span className="font-semibold">Visa type : </span> {visaType}
                </p>
                <p>
                    <span className="font-semibold">Time : </span>
                    {time}
                </p>
                <p>
                    <span className="font-semibold">Validity : </span>
                    {validity}
                </p>
                <p>
                    <span className="font-semibold">Fee : </span>
                    {fee}
                </p>
                <p>
                    <span className="font-semibold">Application method : </span>
                    {method}
                </p>
                <p>
                    <span className="font-semibold">Description : </span>
                    {discrip}
                </p>
                <div className="card-actions flex justify-center items-center">
                    <button
                        className="py-3 rounded-lg bg-[#007BFF] hover:bg-[#0056B3] text-center font-semibold px-7"
                        onClick={() => hanaleModal(addeVisa)}
                    >
                        Update
                    </button>
                    <Link
                        to={`/delete`}
                        className="py-3 rounded-lg bg-[#007BFF] hover:bg-[#0056B3] text-center font-semibold px-7"
                    >
                        Delete
                    </Link>
                </div>
                {/* Use a unique ID for the modal */}
                <dialog id={`modal_${_id}`} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* Close button */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">{update.name}</h3>
                        <p className="py-4">
                            Press ESC key or click on ✕ button to close
                        </p>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default MyAddedVisaCard;
