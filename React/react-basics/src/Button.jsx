function handleClick(event){
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("Bye!");
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias tempore culpa quod aliquid accusantium quasi cupiditate deserunt aliquam, labore, porro eligendi asperiores debitis vero maiores cum quia facilis harum animi soluta itaque quae possimus suscipit odio! Qui quia adipisci voluptates cumque reprehenderit voluptatem vitae perferendis repellendus accusantium provident? Harum, quod.</p>
        </div>
    );
}