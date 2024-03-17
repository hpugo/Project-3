const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title> Henry's Soccer League </title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    ) 
}

module.exports = Def