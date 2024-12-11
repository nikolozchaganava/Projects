import React, { useEffect, useState } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourDegrees = (hours + minutes / 60) * 30;
    const minuteDegrees = (minutes + seconds / 60) * 6;
    const secondDegrees = seconds * 6;

    return (
        <div className="border-black border-[2px] relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20em] h-[20em] rounded-full flex justify-center items-center">
            <div
                className="absolute w-2 h-24 bg-black origin-bottom"
                style={{ transform: `rotate(${hourDegrees}deg)` }}
            />
            <div
                className="absolute w-1 h-32 bg-blue-700 origin-bottom"
                style={{ transform: `rotate(${minuteDegrees}deg)` }}
            />
            <div
                className="absolute w-0.5 h-36 bg-red-500 origin-bottom"
                style={{ transform: `rotate(${secondDegrees}deg)` }}
            />
        </div>
    );
};
