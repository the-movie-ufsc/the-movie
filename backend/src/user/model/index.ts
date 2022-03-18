import { DataTypes, Model } from "sequelize";
import db from "../../config/database.config";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UserInstance extends Model<UserAttributes> {
  id: any;
  name: any;
  email: any;
  password: any;
}

UserInstance.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "user",
  }
);
