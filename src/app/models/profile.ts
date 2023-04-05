import { UserBalance } from "./user-balance";

export class Profile {
    public id: number|undefined;
    public username: string|undefined;
    public email: string|undefined;
    public email_verified_at: string|undefined;
    public currency: string|undefined;
    public firstname: string|undefined;
    public lastname: string|undefined;
    public birthday: string|undefined;
    public identity_number: number|undefined;
    public phone: string|undefined;
    public ip: string|undefined;
    public data: any;
    public dealer_id: number|undefined;
    public call_center_id: number|undefined;
    public last_login: string|undefined;
    public hitent_token: string|undefined;
    public created_at: string|undefined;
    public updated_at: string|undefined;
    public is_active: number|undefined;
    public balance: string|undefined;
    public user_balance: UserBalance|undefined;
}