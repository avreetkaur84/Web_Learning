function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form was Submitted!");
}

export default function Forms() {
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Write Something"></input>
            <button>Submit</button>
        </form>
    );
}