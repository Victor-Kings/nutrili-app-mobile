export interface IUpdateProfileServiceProps {
    updateProfile:(update: IPayloadUpdate) => Promise<void>
    updateProfilePick:(ImageData: any) => Promise<void>
}

export interface Address {
    cep: string | undefined;
    state: string | undefined;
    city: string | undefined;
    neighborhood: string | undefined;
    street: string | undefined;
    number: string | undefined;
}

export interface IPayloadUpdate {
    weight: number | undefined;
    nutritionist: boolean | undefined;
    crn: number | undefined;
    crnType: string | undefined;
    name: string | undefined;
    gender: string | undefined;
    birth: string | undefined;
    phone: string | undefined;
    height: number | undefined;
    cpf: string | undefined;
    email: string | undefined;
    password: string | undefined;
    personalAddress: Address | undefined;
    officeAddress: Address | undefined;
}