const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        
        







       
Zugnummer: { type: DataTypes.STRING, allowNull: false },
Fahrplandatum: { type: DataTypes.DATE, allowNull: false },
Versandbahnhof: { type: DataTypes.STRING, allowNull: false },
Bestimmungsbahnhof : { type: DataTypes.STRING, allowNull: false },
Wagenmeister : { type: DataTypes.STRING, allowNull: false },
Kundenreferenz: { type: DataTypes.STRING, allowNull: false },
Wagenliste_betrieblich: { type: DataTypes.STRING, allowNull: false },
Status: { type: DataTypes.STRING, allowNull: false },
Bremszettel: { type: DataTypes.STRING, allowNull: false },
Gewicht_arbTf: { type: DataTypes.FLOAT, allowNull: false },
Bremsgewicht_arbTf: { type: DataTypes.FLOAT, allowNull: false },
Achszahl_arbTf: { type: DataTypes.INTEGER, allowNull: false },
Laenge_arbTf: { type: DataTypes.FLOAT, allowNull: false },
Mindestbremshundertstel: { type: DataTypes.INTEGER, allowNull: false },
Datum_Bremszettel: { type: DataTypes.DATE, allowNull: false },
AusführendePerson: { type: DataTypes.STRING, allowNull: false },

    };
    
    

    return sequelize.define('Zugabfertigung', attributes);
}