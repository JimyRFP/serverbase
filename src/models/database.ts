import {Sequelize}  from "sequelize";
import * as config from '../env/database';

export const dataBase=new Sequelize(config);
