export interface IApiDataResponse {
    privacy: string;
    quotes: {
        [key:string]:number,
    };
    source: string;
    success: boolean;
    terms: string;
    timestamp: string;
}
