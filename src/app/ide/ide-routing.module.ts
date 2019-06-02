import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { HeaderComponent } from '../shared/header/header.component';
import { AceEditorComponent } from './editor/ace-editor/ace-editor.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { EditorOutputComponent } from './editor/editor-output/editor-output.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: EditorComponent,
    children: [
      {
        path: '', component: HeaderComponent, outlet: 'header'
      },
      { 
        path: '', component: AceEditorComponent, outlet: 'ace-editor' 
      },
      { 
        path: '', component: EditorOutputComponent, outlet: 'ace-editor-output' 
      },
      {
        path: '', component: FooterComponent, outlet: 'footer'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule]
})
export class IdeRoutingModule { }
