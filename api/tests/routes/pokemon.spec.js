/* eslint-disable import/no-extraneous-dependencies */
const  expect  = require('chai').expect;
const session = require('supertest-session');
const request = require('supertest');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', (done) => {
    it('should get 200', (done) =>{

      agent.get('/api/pokemon').expect(200)
      done()
    }
      
     
    ); 
  });
});


      
     
     
  