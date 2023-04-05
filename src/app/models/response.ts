export class ApiResponse<T> {
    public code: string = '';
    public message: string = '';
    public data: T | undefined;
}