import { Component, ViewChild } from '@angular/core';
import { NgxEditorJSComponent, NgxEditorJSService } from '@tinynodes/ngx-editorjs';
import { NgxEditorJSPluginService } from '@tinynodes/ngx-editorjs-plugins';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @ViewChild('ngxEditorJS', { read: NgxEditorJSComponent, static: true })
  ngxEditorJS!: NgxEditorJSComponent;


  constructor(private readonly editorService: NgxEditorJSService, private readonly editorPluginService : NgxEditorJSPluginService){

  }


  public holder = 'ngx-editorjs-demo';

onSave(){
  console.log("Saving");
}

}
