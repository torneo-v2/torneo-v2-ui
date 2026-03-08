import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@torneo/layout/header/header.component';
import { FooterComponent } from '@torneo/layout/footer/footer.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
})
export class LayoutComponent {}
