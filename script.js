window.addEventListener("load", function() {

    let container = document.getElementById('container');
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        return (response.json())
    }).then(function(json) {
        json.map(function(astronaut) {
            container.innerHTML += `            
            <div class="astronaut">
                <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>                
                <ul>
                    <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                    <li id='active'>Active: ${astronaut.active}"</li>
                    <li>Skills: ${astronaut.skills}</li>
                </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}"/>
            </div>
            `;
            let activeStatus = document.getElementById('active');            
        });
    });
});