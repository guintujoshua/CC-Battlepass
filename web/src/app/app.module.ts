import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ExampleContainerComponent } from "./example-container/example-container.component";
import { BattlepassComponent } from './battlepass/battlepass.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
	declarations: [
		AppComponent,
		ExampleContainerComponent,
  BattlepassComponent,
  ProgressBarComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
