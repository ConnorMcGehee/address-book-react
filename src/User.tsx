import { useState } from "react";

interface UserProps {
    fullName: string,
    pictureUrl: string,
    phone: string,
    email: string
}

function User({ fullName, pictureUrl, phone, email }: UserProps) {
    const [showDetails, setDetailsState] = useState(false)

    return (
        <div className="user">
            <h2>{fullName}</h2>
            <img src={pictureUrl} width="128px" />
            <button className="showDetails" onClick={(e) => {
                e.preventDefault();
                setDetailsState(!showDetails)
            }}>{showDetails ? ("Hide") : ("Show")} Details</button>
            {showDetails ? (
                <ul className="details">
                    <li><a href={`tel:${phone}`}>{phone}</a></li>
                    <li className="email"><a href={`mailto:${email}`}>{email}</a></li>
                </ul>
            ) : (
                null
            )}
        </div>
    )
}

export default User;