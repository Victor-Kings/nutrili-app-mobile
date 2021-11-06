export interface IGetDataProfileApi {
    name: string,
    gender: string,
    birth: string,
    weight: number,
    height: number,
    age: number,
    address: {
        cep: string,
        state: string,
        city: string,
        neighborhood: string,
        street: string,
        number: string,
        officeName: string,
        officePhone: string
    },
    profilePic: string
}

export interface IGetDataProfileProps {
    execute: () => Promise<IGetDataProfileApi[]>
  }
  