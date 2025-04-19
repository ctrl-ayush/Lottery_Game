import { useState } from "react"
import { genTicket,sum } from "./helper";
// import "./Lottery.css";
export default function Lottery() {
    const[ticket,setTicket] = useState(genTicket(3));

    let isWinning=sum(ticket)===15;

    let refresh=()=>{
        setTicket(genTicket(3));
    }

    return (
        <div className="lottery">
            <h2>Lottery games</h2>
            <div className="ticketItems">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={refresh}>Get new nos.</button><br />
            <h2>{isWinning && "You win!"}</h2>
            
        </div>
        
    )
}