setInterval(() => {
    const newDate = new Date();
    const hoursTime = newDate.getHours();
    const minutesTime = newDate.getMinutes();
    const secondsTime = newDate.getSeconds();
    const hoursRotation = 30 * hoursTime + minutesTime / 2;
    const minutesRotation = 6 * minutesTime;
    const secondsRotation = 6 * secondsTime;
    
    hour.style.transform = `rotate(${hoursRotation}deg)`;
    minute.style.transform = `rotate(${minutesRotation}deg)`;
    second.style.transform = `rotate(${secondsRotation}deg)`;
}, 1000);
