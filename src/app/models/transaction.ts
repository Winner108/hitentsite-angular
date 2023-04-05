import { TransactionHistory } from "./transaction-history"

class PageLink {
    public url: string = "";
    public label: string = "";
    public active: boolean = true;
}
class Transactions {
    public current_page: number = 0;
    public data: TransactionHistory[] = [];
    public first_page_url: string = "";
    public from: number = 0;
    public last_page: number = 0;
    public last_page_url: string = "";
    public links: PageLink[] = [];
    public next_page_url: string = "";
    public path: string = "";
    public per_page: number = 0;
    public prev_page_url: string = "";
    public to: number = 0;
    public total: number = 0;
}

export class Transaction {
    public dateBegin: string = "";
    public dateEnd: string = "";
    public transactions: Transactions = new Transactions;
}