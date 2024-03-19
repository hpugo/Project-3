const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title> Henry's Soccer League </title>
                <link rel="stylesheet" href="/navigation/navigation.css" />
                <link rel="stylesheet" href="../public/homepage/homepage.css" />

            </head>
            <body>
            <nav className='nav-bar'>
           
            <div className='nav-list-container'>
                <ul className='nav-list'>
                    <li className='logo'><a href='/'><img src="https://seeklogo.com/images/S/soccer-club-emblem-logo-D69983F663-seeklogo.com.png" alt="League Logo" style={{width: '60px', height: '60px'}}/> </a></li>
                    <li><a href='/league'>League</a></li>
                    <li><a href='/teams'>Teams</a></li>
                    <li><a href='/photos'>Photos</a></li>
                </ul>
            </div>
        </nav>
                {html.children}

            </body>
        </html>
    ) 
}

module.exports = Def