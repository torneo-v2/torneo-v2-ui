import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { TranslateService, LangChangeEvent, TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LayoutComponent } from '@torneo/layout/layout.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [LayoutComponent, TranslateModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
    protected readonly title = signal('untitled');
    private translate = inject(TranslateService);
    private langChangeSubscription?: Subscription;

    ngOnInit(): void {
        // Set initial lang attribute
        this.setHtmlLangAttribute(this.translate.getCurrentLang() || this.translate.getFallbackLang() || "en");

        // Subscribe to language changes
        this.langChangeSubscription = this.translate.onLangChange.subscribe(
            (event: LangChangeEvent) => {
                this.setHtmlLangAttribute(event.lang);
            }
        );
    }

    ngOnDestroy(): void {
        // Clean up subscription to prevent memory leaks
        this.langChangeSubscription?.unsubscribe();
    }

    private setHtmlLangAttribute(lang: string): void {
        if (lang && typeof document !== 'undefined') {
            document.documentElement.setAttribute('lang', lang);
        }
    }
}
