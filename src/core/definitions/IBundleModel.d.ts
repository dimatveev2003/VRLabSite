interface IBundleModel {
    id: number;
    name: string;
    description: string;
    laboratories: ILaboratoryModel[];
    prices: IPriceModel[];
}