export interface IGetDataAPI {
  name: string;
  food: string[];
}
export interface IGetData {
    title: string;
    data: string[];
  }
  
export interface IGetDietServiceProps {
  execute: () => Promise<IGetData[]>;
}
