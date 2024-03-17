const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let teams = [{
        name: 'Favela FC',
        coach: 'Henry',
        players: 12,
        team_color: 'Black',
        logo: 'https://i.pinimg.com/originals/31/e2/41/31e241c9a7c191efe7c39a34e2e91830.jpg' 
    }, {
        name: 'La Nube',
        coach: 'Adrian',
        players: 14,
        team_color: 'Blue',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png'
        }]
    res.render('teams/index', {teams});
});


module.exports = router;
