import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { VisualizationsComponent } from './layouts/visualizations/visualizations.component';
import { DevInfoComponent } from './layouts/dev-info/dev-info.component';

export const routes: Routes = [
    {path: "home", component:HomeComponent},
    {path: "visualizations", component:VisualizationsComponent},
    {path: "devinfo", component:DevInfoComponent}
];
