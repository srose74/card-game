const express = require("express");
const app = express();

const port = process.env.PORT || 3001; // Note: using a different port to normal

app.use(express.json());
app.use(express.static("./client/build"));

app.get("/api/test", (req, res) => {
  res.json({ result: "success2" });
});

app.get("/api/hand", (req, res) => {
    const cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];

    let hands = [];

    //card 1
    let card = Math.floor(Math.random() * (cards.length));
    let suit = Math.floor(Math.random() * (suits.length));
    hands.push({card: cards[card], suit: suits[suit]});

    //card 2
    card = Math.floor(Math.random() * (cards.length));
    suit = Math.floor(Math.random() * (suits.length));
    hands.push({card: cards[card], suit: suits[suit]});

    return res.json(hands);
    
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});