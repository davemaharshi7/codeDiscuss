import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeRoutingModule } from './ide-routing.module';
import { EditorComponent } from './editor/editor.component';
import { AceEditorComponent } from './editor/ace-editor/ace-editor.component';
import { EditorOutputComponent } from './editor/editor-output/editor-output.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditorComponent, AceEditorComponent, EditorOutputComponent],
  imports: [
    CommonModule,
    IdeRoutingModule,FormsModule
  ]
})
export class IdeModule { }
