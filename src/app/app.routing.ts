/**
 * Created by Roman on 26.09.2016.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ItemsComponent} from "./items/items.component";
import {ItemsEditComponent} from "./items-edit/items-edit.component";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {CanActivateService} from "./Services/can-activate.service";
import {MainComponent} from "./main/main.component";
import {LayoutComponent} from "./layout/layout.component";

const appRoutes: Routes = [

  // Страница авторизации
  {
    path: 'auth',
    component: AuthorizationComponent
  },

  // Основной layout
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ CanActivateService ],
    children: [

      {
        path: '',
        component: MainComponent
      },
      {
        path: 'items',
        component: ItemsComponent
      },
      {
        path: 'item-edit',
        component: ItemsEditComponent
      },
      {
        path: 'item-edit/:id',
        component: ItemsEditComponent
      }

    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
