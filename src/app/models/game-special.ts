export class GameSpecialProvider {
    public id: number | undefined;
    public name: string | undefined;
    public code: string | undefined;
    public provider_name: string | undefined;
    public type: number | undefined;
    public commission: number | undefined;
    public order: number | undefined;
    public is_active: boolean | undefined;
    public is_mobile: boolean | undefined;
    public banner: any;
    public type_name: string | undefined;
}

export class GameSpecial {
    public id: number | undefined;
    public name: string | undefined;
    public provider_id: number | undefined;
    public code: string | undefined;
    public rsg_id: number | undefined;
    public image: string | undefined;
    public is_free_spin: boolean | undefined;
    public is_active: boolean | undefined;
    public is_new: boolean | undefined;
    public is_popular: boolean | undefined;
    public is_mobile: number | undefined;
    public order: number | undefined;
    public type: number | undefined;
    public provider: GameSpecialProvider | undefined;
}