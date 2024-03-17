const React = require('react')
const Def = require('../default')

function index(data){
    let teamsFormatted = data.teams.map((team) => {
        return (
            <div>
                <h2>{team.name}</h2>
                <img src={team.logo} alt={team.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Team Index Page</h1>
                {teamsFormatted}
            </main>
        </Def>
    )
}

module.exports = index