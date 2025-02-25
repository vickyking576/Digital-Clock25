

updateClock();
setInterval(updateClock,1000);


function updateClock() {  
    const now = new Date();  
    const hours = now.getHours().toString().padStart(2, '0'); // Corrected padStart second argument to '0'  
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Corrected padStart second argument to '0'  
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Corrected padStart second argument to '0'  
    const time = `${hours}:${minutes}:${seconds}`; // Use 'time' instead of 'timestring'  
    document.getElementById("clock").textContent = time; // Corrected variable name to 'time'  
}  

// Initial call to update the clock immediately  
updateClock();  
// Update clock every second  
setInterval(updateClock, 1000);