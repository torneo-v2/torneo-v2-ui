import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TorneoTitleStrategy extends TitleStrategy {
    constructor(private title: Title) {
        super();
    }

    override updateTitle(routerState: RouterStateSnapshot): void {
        const pageTitle = this.buildTitle(routerState);

        if (pageTitle) {
            this.title.setTitle(`${pageTitle} | Torneo`);
        } else {
            this.title.setTitle('Torneo');
        }
    }
}
