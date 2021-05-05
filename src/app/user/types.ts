import { Product } from "../product/types";

export interface User {
    id: string,
    name: string,
    points: number,
    redeemHistory: Product[],
    //TODO: createDate: "new Date(1510171520852)"
}
