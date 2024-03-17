const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <img src='https://i.pinimg.com/originals/8f/55/81/8f55813e3035ef1965fc86b6d9c2b0aa.gif' alt="Suarez kicking the ball when Neymar was tieing his shoe"/>
                <p>Sorry Seems like this page doesn't exist!</p>
                <button><a href="/">Go Back Home</a></button>
            </main>
        </Def>
    )

}

module.exports = error404