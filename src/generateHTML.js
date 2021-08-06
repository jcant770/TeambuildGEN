const GENmanager = function (Manager) {
    return `
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
     <h3> Manager: ${Manager.name} </h3>
    </p>
  </header>
  <div class="card-content">
  <p class="id"> ID: ${Manager.id}</p>
  <p class="email"> EMAIL: <a href="${Manager.email}">${Manager.email}</a></p>
  <p class="office"> OFFICE#: ${Manager.officeNumber}</p>
    <div class="content">
    </div>
  </div>
</div>
    `;
}

const GENengineer = function (Engineer) {
    return `
    <div class="card">
    <header class="card-header">
      <p class="card-header-title">
       <h3> Engineer: ${Engineer.name} </h3>
      </p>
    </header>
    <div class="card-content">
    <p class="id"> ID: ${Engineer.id}</p>
    <p class="email"> EMAIL: <a href="${Engineer.email}">${Engineer.email}</a></p>
    <p class="github"> GITHUB: <a href="https://github.com/${Engineer.github}">${Engineer.github}</p>
      <div class="content">
      </div>
    </div>
  </div>
    `;
}

const GENintern = function (Intern) {
    return `
    <div class="card">
    <header class="card-header">
      <p class="card-header-title">
       <h3> Intern: ${Intern.name} </h3>
      </p>
    </header>
    <div class="card-content">
    <p class="id"> ID: ${Intern.id}</p>
    <p class="email"> EMAIL: <a href="${Intern.email}">${Intern.email}</a></p>
    <p class="school"> School: ${Intern.school}</p>
      <div class="content">
      </div>
    </div>
  </div>
    `;
}

GENhtml = (data) => {
    CArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerC = GENmanager(employee);

            CArray.push(managerC);
        }

        if (role === 'Engineer') {
            const engineerC = GENengineer(employee);

            CArray.push(engineerC);
        }

        if (role === 'Intern') {
            const internC = GENintern(employee);

            CArray.push(internC);
        }
    }

    const employeeCs = CArray.join('')

    const GENTeam = GENteamhtml(employeeCs);
    return GENteamhtml;
}

const GENteamhtml = function (employeeCs) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Meet the Team</title>
        <link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@1,600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <section class = "section">
                <div class = "container">
                    <span class = "title">
                        Team Profile
                    </span>
                    <br>
                    <br>
                
                    <section class = "hero is-warning is-bold">
                        <div class = "hero-body">
                            <div class = "container">
                                <div class="row justify-content-center" id="team-cards">
                                    ${employeeCs}
                            </div>
                        </div>
                    </section>
            
                </div>
        </section>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    `;
}

module.exports = GENhtml;