const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        UIC_Wagennummer: { type: DataTypes.BIGINT, allowNull: false },
        Wagennummer: { type: DataTypes.STRING, allowNull: false },
        Wagengattung: { type: DataTypes.STRING, allowNull: false },
        Achsen: { type: DataTypes.INTEGER, allowNull: false },
        LüP: { type: DataTypes.FLOAT, allowNull: false },
        Eigengewicht: { type: DataTypes.INTEGER, allowNull: false },
        Automatische_Lastabremsung: { type: DataTypes.INTEGER, allowNull: false },
        Bremsgewicht_leer: { type: DataTypes.INTEGER, allowNull: false },
        Bremsgewicht_beladen: { type: DataTypes.INTEGER, allowNull: false },
        Umstellgewicht: { type: DataTypes.INTEGER, allowNull: false },
        Handbremse: { type: DataTypes.BOOLEAN, allowNull: false },
        Scheibenbremse: { type: DataTypes.BOOLEAN, allowNull: false },
        Verbundstoffsohle: { type: DataTypes.STRING, allowNull: false },
        Bremsart: { type: DataTypes.STRING, allowNull: false },

        Ladegewicht: { type: DataTypes.INTEGER, allowNull: false },

        Bremsstellung: { type: DataTypes.STRING, allowNull: false },
        Bremsgewicht: { type: DataTypes.INTEGER, allowNull: false },
        Versandbahnhof: { type: DataTypes.STRING, allowNull: false },
        Zielbahnhof: { type: DataTypes.STRING, allowNull: false },
        Bemerkung: { type: DataTypes.STRING, allowNull: false },
        Bremse_aus: { type: DataTypes.BOOLEAN, allowNull: false },

    };
    
    

    return sequelize.define('WagendatenBetrieblich', attributes);
}