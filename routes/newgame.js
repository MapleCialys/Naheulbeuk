const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req,res) =>
{
    res.render('newgame');
});

//ici, a la base c'était un endpoint router.post , mais je l'ai changer par un .get pour avoir req.params. Avec le .post, req.body est undefined

router.get('/:personnage', async (req,res) =>
{
    const {rows} = await db.execute(
        {
            sql: 'SELECT id FROM personnage WHERE metier = ?',
            args: [req.params.personnage]
        }
    );
    await db.execute(
        {
            sql: 'INSERT INTO partie (hero, page) VALUES (:hero, :page)',
            args: {hero: rows[0].id, page: 1}
        }
    );
    res.redirect('../page/1');
});


module.exports = router;