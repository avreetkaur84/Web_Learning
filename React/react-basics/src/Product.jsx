import "./Product.css";
import Price from "./Price";

function Product({title, idx})
{
    let oldPrices=["599", "12,566", "1,234", "11,455"];
    let newPrices=["550", "11,999", "999", "10,199"];
    let description=[
        ["Wireless", "Optical Orientation"], 
        ["Intuitive surface", "Designed for IPad Pro"], 
        ["Designed for IPad Pro", "Intuitive surface"], 
        ["8,000 DPI", "5 Programmale Buttons"]
    ]
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;