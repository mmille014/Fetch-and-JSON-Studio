window.addEventListener("load", function() {

    let container = document.getElementById('container');
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {} {
        return (response.json())
    }).then(function(json) {
        json.map(function(article) {
            container.innerHTML += `            
            <div class="astronaut">
                <div class="bio">
                <h3>${article.firstName} ${article.lastName}</h3>                
                <ul>
                    <li>Hours in Space: ${article.hoursInSpace}</li>
                    <li id='active'>Active: ${article.active}"</li>
                    <li>Skills: ${article.skills}</li>
                </ul>
                </div>
                <img class="avatar" src="${article.picture}"/>
            </div>
            `;
            let activeStatus = document.getElementById('active');
            }
        })
    }
})