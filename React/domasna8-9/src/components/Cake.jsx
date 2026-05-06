import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake, restockCakes } from './../actions/CakeActions';

export const Cake = () => {
    const dispatch = useDispatch();

    const cakes = useSelector(state => state.CakeReducer.cakes);
    const error = useSelector(state => state.CakeReducer.error);

    const [buyInput, setBuyInput] = useState("");
    const [restockInput, setRestockInput] = useState("");

    function handleBuyCake() {
        const numberOfCakes = Number(buyInput);

        if (!buyInput || numberOfCakes <= 0) {
            alert("Please enter a valid number");
            return;
        }

        dispatch(buyCake(numberOfCakes));
        setBuyInput("");
    }

    function handleRestockCake() {
        const numberOfCakes = Number(restockInput);

        if (!restockInput || numberOfCakes <= 0) {
            alert("Please enter a valid number");
            return;
        }

        dispatch(restockCakes(numberOfCakes));
        setRestockInput("");
    }

    return (
        <div id='cake'>
            <h2>Cakes: {cakes}</h2>

            <input
                type="number"
                value={buyInput}
                onChange={(e) => setBuyInput(e.target.value)}
                placeholder="How many cakes to buy?"
            />
            <button onClick={handleBuyCake}>Buy Cakes</button>

            <br /><br />

            <input
                type="number"
                value={restockInput}
                onChange={(e) => setRestockInput(e.target.value)}
                placeholder="How many cakes to restock?"
            />
            <button onClick={handleRestockCake}>Restock Cakes</button>

            {error && <h3 style={{ color: "red" }}>{error}</h3>}
        </div>
    )
}