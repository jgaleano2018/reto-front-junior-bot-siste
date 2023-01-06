import { Product } from "./product.interface";

export interface Buy {
    id: number;
    name: string;
    idType: number;
    identificationCard: string;
    clientName: string
    quantity: number;
    product: Product[];
}