const axios = require('axios');

     
 const getAllApi = async() => {    
    const resp = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
    const  pokeInfo =(resp.data.results);
     let a = [];
   for (const key of pokeInfo) {
    let url = await axios.get(key.url);
   let obj ={
     id       :url.data.id,
     name     :url.data.forms[0].name,
     img      :url.data.sprites.other.home.front_default,
     hp       :url.data.stats[0].base_stat,
     strength : url.data.stats[1].base_stat,
     defense  : url.data.stats[2].base_stat,  
     speed    : url.data.stats[5].base_stat,
     height   : url.data.height,
     weight   : url.data.weight,
     type    : url.data.types.map((el) => el.type.name),
   }
   a.push(obj);
}

return a;

}
module.exports= getAllApi;  



