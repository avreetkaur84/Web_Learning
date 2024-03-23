import { useState } from "react";

export default function Lottery() {
    const [ticket, setTicket] = useState(null);
    const [result, setResult] = useState(null);

    let generateTicket = () => {
        let min = 100;
        let max = 999;
        let num = Math.floor(Math.random() * (max - min + 1)) + min;

        setTicket(num);

        let a = num, b=0, sum=0;
        while(a!=0){
            b = a%10;
            sum = sum + b;
            a = Math.floor(a/10);
        }
        
        if(sum == 15)  {
            setResult("Congratulations! You won");
        } else {
            setResult("Better Luck, Next Time");
        }
    }


    return (
        <div>
            <h1>Lottery</h1>
            <h2>Result: {result != null ? result : " "}</h2>
            <h3>Lottery Ticket = {ticket != null ? ticket: "#"}</h3>
            <button onClick={generateTicket}>Get New Ticket</button>
        </div>
    );
}