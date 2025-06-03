import React from "react";
import './App.css';
import SimpleButton from "./SimpleButton";
import CounterProblem from "./CounterProblem";
import CounterCallback from "./CounterCallback";
import ProductList from "./ProductList";
import Odstep from "./odstep";

export default function App() {
    return (
        <div>
            <h2>Ćwiczenie 1: Prosta referencja do funkcji</h2>
            <SimpleButton />

            <Odstep />

            <h2>Ćwiczenie 2: Problem z nową referencją</h2>
            <CounterProblem />

            <Odstep />

            <h2>Ćwiczenie 3: Rozwiązanie z useCallback</h2>
            <CounterCallback />

            <Odstep />

            <h2>Ćwiczenie 4: useCallback z tablicą jako zależnością</h2>
            <ProductList />
        </div>
    );
}
