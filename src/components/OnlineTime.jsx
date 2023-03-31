import React from 'react'

import { useState, useEffect } from 'react';

function OnlineTime() {
    const [onlineTime, setOnlineTime] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const dateString = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
            const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            setOnlineTime(dateString);
            setDayOfWeek(dayString);
            setCurrentTime(timeString);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            {onlineTime}
            <br />
            {dayOfWeek}
            <br />
            {currentTime}
        </div>
    );
}

export default OnlineTime;

