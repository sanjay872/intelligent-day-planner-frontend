import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  imports: [MatProgressSpinnerModule],
  templateUrl: './app-loader.component.html',
  styleUrl: './app-loader.component.scss'
})
export class AppLoaderComponent {
  
}
