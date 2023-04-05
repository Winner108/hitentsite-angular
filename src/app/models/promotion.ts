export class Promotion {
    public id: number | undefined;
    public type: number | undefined;
    public state: number | undefined;
    public order: number | undefined;
    public is_active: boolean | undefined;
    public is_visibile_on_footer: boolean | undefined;
    public url: string | undefined;
    public locate: string | undefined;
    public image: string | undefined;
    public title: string | undefined;
    public content: string | undefined;
    public data: any[] = [];
    public place: string | undefined;
    public state_name: string | undefined;
}