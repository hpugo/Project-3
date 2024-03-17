const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title> Henry's Soccer League </title>
                <link rel="stylesheet" href="/navigation/navigation.css" />
            </head>
            <body>
            <div className='nav-bar'>
                <div className='logo'>
                    <a href='/'><img src="https://static.vecteezy.com/system/resources/thumbnails/011/049/345/small/soccer-football-badge-logo-sport-team-identity-illustrations-isolated-on-white-background-vector.jpg" /> </a>
                </div>
                <nav className='nav-list-container'>
                    <ul className='nav-list'>
                        <li><a href='/league'>League</a></li>
                        <li><a href='/teams'>Teams</a></li>
                        <li><a href='/photos'>Photos</a></li>
                    </ul>
                </nav>
            </div>
                {html.children}
            </body>
        </html>
    ) 
}

module.exports = Def