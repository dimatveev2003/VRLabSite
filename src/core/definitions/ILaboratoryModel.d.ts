interface ILaboratoryModel {
    id: number;
    name: string;
    section: string;
    description: string;
    videoId: string;
    prices: IPriceModel[];
}