export class TransactionHistory {
    public id: number = 0;
    public user_id: number = 0;
    public promotion_id: number = 0;
    public payment_method_id: number = 0;
    public bank_id: number = 0;
    public admin_id: number = 0;
    public amount: string = "";
    public balance: string = "";
    public status: number = 0;
    public type: number = 0;
    public data: any;
    public created_at: string = "";
    public updated_at: string = "";
    public status_name: string = "";
    public type_name: string = "";
    public payment_method: string = "";
    public game: any;
    public provider: any;
    public payment_transaction: any;
}
