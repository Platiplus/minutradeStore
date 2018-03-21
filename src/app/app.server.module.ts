import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import { ClassField } from '@angular/compiler/src/output/output_ast';

@NgModule({
    imports: [AppModule, ServerModule],
    bootstrap: [AppComponent]
})

export class AppServerModule {}