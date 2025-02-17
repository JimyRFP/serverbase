import { dataBase } from "./database";
import { BaseServerUser } from "./user";

export default{
    sequelizeInstance:dataBase,
    models:{
        BaseServerUser
    }
}