import React from "react";

export default function SimpleButton() {
    function handleClick() {
        console.log("Kliknięto przycisk!");
    }

    return (
        <button onClick={handleClick}>Kliknij mnie</button>
    );
}
