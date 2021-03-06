export interface HouseState {
    houses: any[];
    house: any[];
    loading: boolean;
}
export enum HouseActionTypes {
    SET_HOUSES = 'SET_HOUSES',
    SET_ONE_HOUSE = 'SET_ONE_HOUSE',
    FETCH_HOUSES = 'FETCH_HOUSES',
    FETCH_ONE_HOUSE = 'FETCH_ONE_HOUSE',
}
export interface SetHouseAction {
    type: HouseActionTypes.SET_HOUSES;
    payload: any;
}
export interface SetOneHouseAction {
    type: HouseActionTypes.SET_ONE_HOUSE;
    payload: any;
}
export interface fetchHousesAction {
    type: HouseActionTypes.FETCH_HOUSES;
}
export interface fetchOneHouseAction {
    type: HouseActionTypes.FETCH_ONE_HOUSE;
}
export type HouseAction =
    | SetHouseAction
    | fetchHousesAction
    | SetOneHouseAction
    | fetchOneHouseAction;

export interface IHouse {
    address: string;
    description: string;
    id: number;
    img: string;
    img_collection: any[];
    name_house: string;
    price: string;
    sales_name: string;
}
export interface CardProps {
    card: IHouse;
}
export interface IParams {
    id: string;
}
export interface IImg {
    img: string;
}
export interface IData {
    houses: IHouse[];
}
