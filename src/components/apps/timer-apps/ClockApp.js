import React, { useState, useEffect } from "react";

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
    });
    return date;
};

const getTimeString2 = () => {
    const date2 = new Date(Date.now()).toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
    });
    return date2;
};


const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());
    const [time2, setTime2] = useState(getTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            let date2 = getTimeString2();
            setTime2(date2);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation" />
            <p>
                {time} <b>Chicago</b>
            </p>
            <p>
                {time2} <b>New York</b>
            </p>
        </div>
    );
};

export default ClockApp;
