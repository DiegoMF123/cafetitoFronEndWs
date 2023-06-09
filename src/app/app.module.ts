import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { YourInterceptor } from './security/interceptor';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],

    providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: YourInterceptor,
        multi: true
    }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
