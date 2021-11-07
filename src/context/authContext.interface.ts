export interface IAuthProps{
    access_token: string;
    refresh_token: string;
    isRegistered:boolean;
    isRegisteredComplete: boolean;
}
export interface IResponseAuthToken{
    access_token: string,
    refresh_token: string,
}
export interface IAuthContext{
    setIsRegistered:(register: boolean) => void;
    isRegistered?:boolean| null;
    signIn:(phoneNumber: string, smsToken: string) => Promise<boolean>;
    registeredDatas:()=>Promise<void>;
    signOut : () => void
}