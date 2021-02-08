import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxEditorJSComponentModule, NgxEditorJSModule } from '@tinynodes/ngx-editorjs';
import { NgxEditorJSPluginServiceModule, NgxEditorjsPluginsModule } from '@tinynodes/ngx-editorjs-plugins';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEditorjsPluginsModule,
    NgxEditorJSComponentModule.forRoot({
      // Optional Configuration, see all keys below
      editorjs: {
        autofocus: false,
        holder: 'editor',
        initialBlock: 'paragraph',
        data: {
          time: Date.now(),
          blocks: []
        }
      }
    }),
    
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
