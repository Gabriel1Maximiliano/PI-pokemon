const express = require('express');
const router = express.Router();

const getAllApi = require('../controllers/pokemons/getAllApi');
const getApiByName = require('../controllers/pokemons/getApiByname');

const getTypes = require('../controllers/pokemons/getTypes');
const getById = require('../controllers/pokemons/getById');
const getAllDb = require('../controllers/pokemons/getAllDb');
const { Type, Pokemon } = require('../db')


router.get('/', async (req, res, next) => {

    try {
        await getTypes()

        const { name } = req.query;


        if (name) {
           
            let resp = await getApiByName(name.toLowerCase());
            console.log(resp)
            res.json(resp)
        }
        else {
            const respApi = await getAllApi();
            const respDb = await getAllDb();
            let data = respApi.concat(respDb);
            res.status(200).json(data);

        }

    } catch (error) {
        console.log(error)
    }


})


router.post('/', async (req, res, next) => {
    const { name, hp, strength, defense, speed, height, weight, img, type } = req.body;
    let toLowerName = name.toLowerCase().trim();


    const pokemon = await Pokemon.findAll({
        where: {
            name,
           
        }
    })
   
    
         if (pokemon.length > 0 ) {
         res.status(200).json('El pokemon existe')
     }else{

        let createPokemon = await Pokemon.create({
            name:toLowerName,
            img,
            hp,
            strength,
            defense,
            speed,
            height,
            weight,
    
          });
          let typeofPokemon = await Type.findAll({ where: { name: type } });
          createPokemon.addType(typeofPokemon);
          res.send("El pokemon fue creado");
    
    
     }



})



router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let resp = await getById(id);
        res.json(resp);

    } catch (error) {
        res.status(404).send('no hay pokemon');
    }
})
router.delete('/:id', async(req,res , next)=>{
    let {id} = req.params;

    let destruido = await Pokemon.destroy({
        where:{
            id:id
        }
    })
    res.send('destruido')
})

module.exports = router 