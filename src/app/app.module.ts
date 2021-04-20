import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ManageUnicornComponent } from './manage-unicorn/manage-unicorn.component';
import { LoggerInterceptor } from './shared/interceptors/logger.interceptor';
import { NavComponent } from './shared/nav/nav.component';
import { AgeFromBirthYearPipe } from './shared/pipes/age-from-birth-year.pipe';
import { UnicornCardComponent } from './unicorn-card/unicorn-card.component';
import { UnicornListComponent } from './unicorn-list/unicorn-list.component';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        CardComponent,
        NavComponent,
        AgeFromBirthYearPipe,
        ManageUnicornComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule {}
