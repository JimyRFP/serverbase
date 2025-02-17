
import { app } from "./app";
import * as modules from './modules/index';
import * as utils from "./utils/index";
import * as dataBase from "./models/index"
import password from "./password";
import middlewares from "./middlewares";

export default {
    app:app,
    modules:modules.default,
    dataBase:dataBase.default,
    utils:utils.default,
    password:password,
    middlewares:middlewares,
}