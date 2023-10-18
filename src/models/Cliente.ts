import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

class Cliente extends Model {
  public id!: number;
  public nome!: string;
  public data_nascimento!: string | null;
  public email!: string | null;
  public telefone!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Cliente",
    tableName: "cliente"
  }
);

export default Cliente;
