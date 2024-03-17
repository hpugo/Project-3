const React = require('react')

export default function Def (html) {
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