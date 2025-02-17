import { Model } from "sequelize";
import { DataTypes } from "sequelize";
import { dataBase } from "./database";

export class BaseServerUser extends Model{
    declare id:string;
    declare email:string;
    declare full_name?:string;
    declare is_active:boolean;
    declare blocked:boolean;
    declare password_hash:string;
    declare last_action:Date;
}

BaseServerUser.init({
    id:{
       primaryKey:true,
       type:DataTypes.UUIDV4,
       allowNull:false,
       defaultValue:DataTypes.UUIDV4,
    },
    full_name:DataTypes.STRING,
    email:DataTypes.STRING,
    is_active:DataTypes.BOOLEAN,
    password_hash:DataTypes.STRING,
    blocked:DataTypes.BOOLEAN,
    last_action:DataTypes.DATE,
},
{ 
  sequelize:dataBase,  
  tableName: 'baseserver_users',  
}
);


