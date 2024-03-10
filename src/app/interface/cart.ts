export interface du {
    status:         string;
    message:        string;
    numOfCartItems: number;
    data:           Data;
}

export interface Data {
    _id:            string;
    cartOwner:      string;
    products:       Product[];
    createdAt:      Date;
    updatedAt:      Date;
    __v:            number;
    totalCartPrice: number;
}

export interface Product {
    count:   number;
    _id:     string;
    product: string;
    price:   number;
}
