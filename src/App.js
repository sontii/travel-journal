import React from "react"
import data from "./data"
import Nav from "./components/Nav"
import Card from "./components/Card"

export default function App() {
    
    const travelData = data.map(m => {
        return (
            <Card
            key={m.title}
            {...m}
            />
        )
    })
    
    return (
        <div className="container">
            <Nav />
            <main>
            {travelData}
            </main>
        </div>
    )
}