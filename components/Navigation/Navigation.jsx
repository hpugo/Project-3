const React = require('react')

function Navigation() {
    return (
        <div className='nav-bar'>
                <div className='logo'>
                    <a href='/'><img src="https://static.vecteezy.com/system/resources/thumbnails/011/049/345/small/soccer-football-badge-logo-sport-team-identity-illustrations-isolated-on-white-background-vector.jpg" alt="League Logo"/> </a>
                </div>
                <nav className='nav-list-container'>
                    <ul className='nav-list'>
                        <li><a href='/league'>League</a></li>
                        <li><a href='/teams'>Teams</a></li>
                        <li><a href='/photos'>Photos</a></li>
                    </ul>
                </nav>
            </div>
    );
}

module.exports = Navigation;