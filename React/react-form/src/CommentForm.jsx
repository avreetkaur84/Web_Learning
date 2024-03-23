import { useState } from "react";

export default function CommentForm() {
    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5,
    })

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]:[event.target.value]};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            username: "",
            remark: "",
            rating: 5,
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input placeholder="Enter username" type="text" name="username" value={formData.username} onChange={handleInputChange}/>
            <br/><br/>
            <label htmlFor="remark">Remark</label>
            <textarea placeholder="Enter few remarks" type="text" name="remark" value={formData.remark} onChange={handleInputChange}/>
            <br/><br/>
            <label htmlFor="rating">Rating</label>
            <input placeholder="Enter rating" type="number" min={1} max={5} name="rating" value={formData.rating} onChange={handleInputChange}/>
            <br/><br/>
            <button>Submit</button>
        </form>
    );
}