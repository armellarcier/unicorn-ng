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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ManageUnicornComponent } from './manage-unicorn/manage-unicorn.component';
import { LoggerInterceptor } from './shared/interceptors/logger.interceptor';
import { NavComponent } from './shared/nav/nav.component';
import { AgeFromBirthYearPipe } from './shared/pipes/age-from-birth-year.pipe';
import { ShowUnicornComponent } from './show-unicorn/show-unicorn.component';
import { AppStoreModule } from './store/app-store.module';
import { UnicornCardComponent } from './unicorn-card/unicorn-card.component';
import { UnicornListComponent } from './unicorn-list/unicorn-list.component';

const httpInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }];

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        CardComponent,
        NavComponent,
        AgeFromBirthYearPipe,
        ManageUnicornComponent,
        HomeComponent,
        ShowUnicornComponent,
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
        MatSnackBarModule,
        AppStoreModule,
    ],
    providers: [...httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
