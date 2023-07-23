import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from "primeng/fileupload";

import { DocumentCreateAdminComponent } from './document-admin/create-admin/document-create-admin.component';
import { DocumentEditAdminComponent } from './document-admin/edit-admin/document-edit-admin.component';
import { DocumentViewAdminComponent } from './document-admin/view-admin/document-view-admin.component';
import { DocumentListAdminComponent } from './document-admin/list-admin/document-list-admin.component';
import { TagCreateAdminComponent } from './tag-admin/create-admin/tag-create-admin.component';
import { TagEditAdminComponent } from './tag-admin/edit-admin/tag-edit-admin.component';
import { TagViewAdminComponent } from './tag-admin/view-admin/tag-view-admin.component';
import { TagListAdminComponent } from './tag-admin/list-admin/tag-list-admin.component';
import { DocumentTypeCreateAdminComponent } from './document-type-admin/create-admin/document-type-create-admin.component';
import { DocumentTypeEditAdminComponent } from './document-type-admin/edit-admin/document-type-edit-admin.component';
import { DocumentTypeViewAdminComponent } from './document-type-admin/view-admin/document-type-view-admin.component';
import { DocumentTypeListAdminComponent } from './document-type-admin/list-admin/document-type-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    DocumentCreateAdminComponent,
    DocumentListAdminComponent,
    DocumentViewAdminComponent,
    DocumentEditAdminComponent,
    TagCreateAdminComponent,
    TagListAdminComponent,
    TagViewAdminComponent,
    TagEditAdminComponent,
    DocumentTypeCreateAdminComponent,
    DocumentTypeListAdminComponent,
    DocumentTypeViewAdminComponent,
    DocumentTypeEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
  ],
  exports: [
  DocumentCreateAdminComponent,
  DocumentListAdminComponent,
  DocumentViewAdminComponent,
  DocumentEditAdminComponent,
  TagCreateAdminComponent,
  TagListAdminComponent,
  TagViewAdminComponent,
  TagEditAdminComponent,
  DocumentTypeCreateAdminComponent,
  DocumentTypeListAdminComponent,
  DocumentTypeViewAdminComponent,
  DocumentTypeEditAdminComponent,
  ],
  entryComponents: [],
})
export class DocAdminModule { }