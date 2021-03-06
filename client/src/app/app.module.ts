import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { BeverageModule } from './beverage/beverage.module';
import { RecipeModule } from './recipe/recipe.module';
import { FeedModule } from './feed/feed.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatButtonModule, MatFormFieldModule, MatInputModule,
	MatDatepickerModule, MatNativeDateModule, MatRadioModule,
	MatSliderModule, MatStepperModule
} from '@angular/material';

import { CoreModule } from './core/core.module';
import { RoutesModule } from './routes.modules';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';

import { AuthService } from './core/auth.service'
import { DialogService } from './dialog.service';
import { ContactsService } from './contacts/contacts.service';
import { AdminService } from './admin/admin.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ChatService } from './chat/chat.service';
import { AuthInterceptor } from './http-interceptors/auth-interceptor'

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		ContactsComponent,
		AdminComponent,
		ChatComponent
	],
	imports: [
		CoreModule,
		HttpClientModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		UsersModule,
		BeverageModule,
		RecipeModule,
		FeedModule,
		RoutesModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatRadioModule,
		MatSliderModule,
		MatStepperModule
	],
	providers: [
		DialogService,
		CanDeactivateGuard,
		ContactsService,
		AdminService,
		ChatService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(
		private authService: AuthService,
		private router: Router
	) {
	}
}
