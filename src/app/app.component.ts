import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponentComponent } from "./portfolio-component/portfolio-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
}
