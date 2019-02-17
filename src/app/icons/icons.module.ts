import { NgModule } from '@angular/core';
import { IconPlusSquare, IconHome, IconShoppingCart, IconShuffle, IconLayers } from 'angular-feather';

const icons = [
  IconHome,
  IconPlusSquare,
  IconShoppingCart,
  IconShuffle,
  IconLayers
];

@NgModule({
  exports: icons
})
export class IconsModule { }
