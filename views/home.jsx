const React = require('react')
const Def = require('./default')
const Navigation = require('../components/Navigation/Navigation');

function home() {
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="/homepage/homepage.css" />
            </head>
            <main>
                <Navigation />
                <h1>Home</h1>
            </main>
        </Def>
    )
}

module.exports = home