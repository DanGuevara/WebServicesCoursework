import {CompanyModel} from './company.model';
import {TasteModel} from './taste.model';

export interface HookahTobaccoModel {
  Id: string;
  Name: string;
  Company: CompanyModel;
  Rate: number;
  Tastes: TasteModel[];
}

