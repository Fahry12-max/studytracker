let startTime, interval;
let running = false;

function formatTime(seconds) {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2,'0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}
let elapsedSeconds = 0;

document.getElementById('start').onclick = () => {
    if (!running){
        running = false;
        startTime = Date.now() - elapsedSeconds * 1000;
        interval = setInterval(() => {
            elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
            document.getElementById('display').textContent = formatTime(elapsedSeconds);
        }, 1000);
    }
};

document.getElementById('stop').onclick = () => {
    if (running) {
        clearInterval(interval);
        running = false;
    }
};

document.getElementById('reset').onclick = () =>{
    clearInterval(interval);
    running = false;
    elapsedSeconds = 0;
    document.getElementById('display').textContent = '00:00:00';
}; 
