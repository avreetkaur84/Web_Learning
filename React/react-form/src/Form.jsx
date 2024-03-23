import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    })

    let handleInputChange = (event) => {
        let feildName = event.target.name;
        let newValue = event.target.value;
        
        setFormData((currData) => {
            currData[feildName] = newValue;
            return {...currData};
        });
    }
    // Shortcut way to write the above code:
    // return{...currData, [event.target.name]:[event.target.value]};

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            username: "",
            password: ""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="Enter your name" type="text" value={formData.fullName} onChange={handleInputChange} name="fullName" id="fullName"/>
            <br/><br/>
            <label htmlFor="username">Username</label>
            <input placeholder="Enter username" type="text" value={formData.username} onChange={handleInputChange} name="username" id="username"/>
            <br/><br/>
            <label htmlFor="password">Password</label>
            <input placeholder="Enter password" type="password" value={formData.password} onChange={handleInputChange} name="password" id="password"/>
            <br/><br/>
            <button>Submit</button>
        </form>
    );
}