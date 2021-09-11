export interface IAuthProps{
    access_token: string,
    refresh_token: string,
    isRegistered:boolean
}
export interface IResponseAuthToken{
    access_token: string,
    refresh_token: string,
}
export interface IAuthContext{
    isRegistered?:boolean| null;
    signIn:(phoneNumber: string, smsToken: string) => void;
    registeredDatas:()=>Promise<void>;
}