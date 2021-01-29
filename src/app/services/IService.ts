import { NavController } from '@ionic/angular';

export interface IService {
  getAllThemes(): Array<any>;
  getTitle(): string;
  load(menuItem: any): any;
}
