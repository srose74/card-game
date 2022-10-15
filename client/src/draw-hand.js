import axios from "axios";
import React, { useState } from 'react';
import Hand from "./hand";


function DrawHand (){
    const [hands, setHands] = useState([]);

    const drawHand = () => {

        axios.get(`/api/hand`).then((res) => {
            console.log(res.data);
            setHands(res.data);
          });

    }

    return (
        <div>
            <button onClick={drawHand}>Draw Hand</button>
            {hands.map((hand, index) => {
                return (
                    <Hand
                        index={index}
                        card={hand.card}
                        suit={hand.suit}
                    ></Hand>
                )
            })

            }
        </div>
    )

}

export default DrawHand