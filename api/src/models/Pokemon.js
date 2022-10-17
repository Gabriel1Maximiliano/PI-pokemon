const { DataTypes } = require('sequelize');

/** 
 * 
 * [ ] Pokemon con las siguientes propiedades:
ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
Nombre *--->   name   
Vida ------>    hp   
Ataque----->    strength 
Defensa---->     defense
Velocidad-->    speed
Altura----->    height
Peso------>       weight 
 id        
      img          type 
 */
module.exports = (sequelize) => {
  
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      get(){
        let aux = this.getDataValue('id');
        return aux.slice(0,6);
      }
   

    }, 
    name: {
      type: DataTypes.STRING,
      allowNull:false
    
     
    },

    hp:{
      type:DataTypes.INTEGER,

    },
    strength :{
       type:DataTypes.INTEGER,
    
    },
    defense:{
      type:DataTypes.INTEGER,
 
    },
    speed:{
      type:DataTypes.INTEGER,
    
    },
    height:{
      type:DataTypes.INTEGER,
    
    },
    weight :{
      type:DataTypes.INTEGER,
     
    },
    // type: {
    //   type: DataTypes.ARRAY(DataTypes.TEXT),
    //     allowNull: false,
    // },
    img: {
      type: DataTypes.STRING,
    },
    createdInDatBase:{
      type: DataTypes.BOOLEAN,
      allowNull:true,
      defaultValue:true
    }
  }, {
    timestamps: false
  });
};
