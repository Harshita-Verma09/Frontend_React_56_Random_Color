import { useState, useEffect } from "react";

const getRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

export default function RandomColorBox() {
    const [color, setColor] = useState("rgb(0, 0, 0)");
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setColor(getRandomRGB());
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div style={{
            backgroundColor: color,
            padding: "50px",
            color: "white",
            height: "60vh",
            width: "20rem",
            textAlign: "center",
            borderRadius: "20px"
        }}>
            <h2>Random Color: {color}</h2>

            <button
                onClick={() => setIsRunning(!isRunning)}
                style={{
                    padding: "10px",
                    marginTop: "10px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}>

                {isRunning ? "Stop Changing Color" : "Start Changing Color"}
            </button>
        </div>
        
    );
}
