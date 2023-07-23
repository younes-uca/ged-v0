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

import { AcessManagementCreateAdminComponent } from './acess-management-admin/create-admin/acess-management-create-admin.component';
import { AcessManagementEditAdminComponent } from './acess-management-admin/edit-admin/acess-management-edit-admin.component';
import { AcessManagementViewAdminComponent } from './acess-management-admin/view-admin/acess-management-view-admin.component';
import { AcessManagementListAdminComponent } from './acess-management-admin/list-admin/acess-management-list-admin.component';
import { AcessShareCreateAdminComponent } from './acess-share-admin/create-admin/acess-share-create-admin.component';
import { AcessShareEditAdminComponent } from './acess-share-admin/edit-admin/acess-share-edit-admin.component';
import { AcessShareViewAdminComponent } from './acess-share-admin/view-admin/acess-share-view-admin.component';
import { AcessShareListAdminComponent } from './acess-share-admin/list-admin/acess-share-list-admin.component';

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

    AcessManagementCreateAdminComponent,
    AcessManagementListAdminComponent,
    AcessManagementViewAdminComponent,
    AcessManagementEditAdminComponent,
    AcessShareCreateAdminComponent,
    AcessShareListAdminComponent,
    AcessShareViewAdminComponent,
    AcessShareEditAdminComponent,
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
  AcessManagementCreateAdminComponent,
  AcessManagementListAdminComponent,
  AcessManagementViewAdminComponent,
  AcessManagementEditAdminComponent,
  AcessShareCreateAdminComponent,
  AcessShareListAdminComponent,
  AcessShareViewAdminComponent,
  AcessShareEditAdminComponent,
  ],
  entryComponents: [],
})
export class ReferetielAdminModule { }