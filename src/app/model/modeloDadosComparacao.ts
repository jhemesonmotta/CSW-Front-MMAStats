export interface ModeloDadosComparacao {
    name: string;
    series: Array<ItemChart>;
}

export interface ItemChart {
    name: string;
    value: number;
}
