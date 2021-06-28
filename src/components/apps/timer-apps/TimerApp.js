import { useState, useEffect } from "react";

const TimerApp = () => {
const [secondsElapsed, setSecondsElapsed] = useState(0);
return (
    <div>
        <h1 className="section-title">React Timer</h1>
        <div>Seconds Elapsed: {secondsElapsed}</div>
    </div>
);
};
export default TimerApp