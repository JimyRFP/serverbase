import { Model } from "sequelize";
export declare class BaseServerUser extends Model {
    id: string;
    email: string;
    full_name?: string;
    is_active: boolean;
    blocked: boolean;
    password_hash: string;
    last_action: Date;
}
