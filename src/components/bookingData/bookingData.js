import React, { useState, useEffect } from "react";
import "./bookingData.css"
function BookingData() {
    const [data, setData] = useState([]);
    useEffect(() => {
		fetch("http://localhost:4000/booking")
			.then((response) => response.json())
			.then(setData);
	}, []);
    console.log(data)
return(
    <div>
        <h2>Booking List</h2>
        {data.map((booking) => (
        <ul key={booking._id} className="bookingData">
            <li><b>Date:</b> {booking.date}</li>
            <li><b>Name:</b> {booking.name}</li>
            <li><b>Email:</b> {booking.email}</li>
            <li><b>Service:</b> {booking.service}</li>
            <li><b>Time:</b> {booking.time}</li>
            <li><b>Duration:</b> {booking.duration}</li>
            <li><b>Note:</b> {booking.note}</li>
        </ul>
        ))}

    </div>
    
)
}
export default BookingData;