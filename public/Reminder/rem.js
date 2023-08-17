document.addEventListener("DOMContentLoaded", function() {
    const reminderInput = document.getElementById("task");
    const addButton = document.getElementById("submit");
    const timeInput = document.getElementById("time")
    const reminderList = document.getElementById("reminder-list");

    addButton.addEventListener("click",async function() {
        const reminderText = reminderInput.value.trim()
        if (reminderText !== "") {
            const display = reminderText.concat('@').concat(timeInput.value);
            // const mySound = new Audio("../images/Nassara,_Pt._2(128k).m4a")
            // mySound.play();
            // mySound.volume(0.2)
            // mySound.stop(3)
            const reminderItem = document.createElement("li");
            console.log(timeInput.value);
            let year = Number(timeInput.value.slice(0,4));
            let month = Number(timeInput.value.slice(5,7))-1;
            let day = Number(timeInput.value.slice(8,10))+1;
            let hour = Number(timeInput.value.slice(11,13));
            let minute = Number(timeInput.value.slice(14));
            const date = Date.UTC(year,month,day,hour,minute);
            console.log(date);
            let currentDate = Date.now();
            if(currentDate >= date){
                alert(`The time specified is past`);
            } else{
                const alertTime = date-currentDate;
                console.log(alertTime);
                setTimeout(()=>{
                    alert(`Remenber to: ${reminderText}`);
                },alertTime/1000);
            };
            console.log(currentDate);
            reminderItem.textContent = display;
            reminderList.appendChild(reminderItem);
            reminderInput.value = "";
            timeInput.value="";
        }
    });
});