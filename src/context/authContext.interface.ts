export interface IAuthProps{
    access_token: string,
    refresh_token: string,
    isRegister:boolean
}
export interface IResponseAuthToken{
    access_token: string,
    refresh_token: string,
}
export interface IAuthContext{
    authenticationToken?:IAuthProps| null;
    signIn:(phoneNumber: string, smsToken: string) => void;
    registeredDatas:()=>Promise<void>;
}