export default (sequelize, Sequelize) => {
    const License = sequelize.define("licenses", {
      apellidos: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombres: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nroLicencia: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      clase: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fechaExpedicion: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      fechaRevalidacion: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    });
  
    return License;
  };