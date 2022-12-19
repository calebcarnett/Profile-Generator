
const managerCard = (manager => {
    return `<div class="individual-cards">
    <div class="card-header">
       <h1>${manager.name}</h1>
       <h2>Manager</h2>
   </div>

   <div class="employee-facts">
       <p>ID: ${manager.id}</p>
       <p>Email: ${manager.email} </p>
       <p>Office number:${manager.officeNumber}</p>
   </div>
</div>`
})
const internsCard = (intern => {
    return `<div class="individual-cards">
    <div class="card-header">
       <h1>${intern.name}</h1>
       <h2>Manager</h2>
   </div>

   <div class="employee-facts">
       <p>ID: ${intern.id}</p>
       <p>Email: ${intern.email} </p>
       <p>Office number:${intern.school}</p>
   </div>
</div>`
})
const engineerCard = (engineer => {
    return `<div class="individual-cards">
    <div class="card-header">
       <h1>${engineer.name}</h1>
       <h2>Manager</h2>
   </div>

   <div class="employee-facts">
       <p>ID: ${engineer.id}</p>
       <p>Email: ${engineer.email} </p>
       <p>Office number:${engineer.school}</p>
   </div>
</div>`
})

const generateHTML = function(data) {

    htmlArr = [];
    for(let i = 0; i < data.length; i++) {
        const emp = data[i]
        const empRole = emp.getRole()
        if (empRole === "Manager") {
            const mngrCard = managerCard(emp)
            htmlArr.push(mngrCard)
        }
        if (empRole === "Intern") { 
            const internCard = internsCard(emp)
            htmlArr.push(internCard)
        }
        if (empRole === "Engineer") {
            const enginCard = engineerCard(emp)
            htmlArr.push(enginCard)
        }
    }
    const empCards = htmlArr.join("")
    const genTeam = generateTeam(empCards);
    return genTeam
};


const generateTeam = function(empCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../dist/styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Document</title>
    </head>
    <body>
        <header class="header">
            My Team
        </header>
        <section class="cards">
        ${empCards}
        </section>
        </main>
        
    </body>
    </html>`
}

module.exports = generateHTML;
