import { Provider } from "./provider";

export class Game {
    public id: number | undefined;
    public name: string | undefined;
    public provider_id: number | undefined;
    public code: string | undefined;
    public rgs_id: string | undefined;
    public image: string | undefined;
    public is_free_spin: boolean | undefined;
    public is_mobile: number | undefined;
    public order: number | undefined;
    public is_active: boolean | undefined;
    public is_new: boolean | undefined;
    public is_popular: boolean | undefined;
    public type: number | undefined;
    public provider: Provider | undefined;
}