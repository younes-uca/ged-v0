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

import { EntiteAdministrativeCreateAdminComponent } from './entite-administrative-admin/create-admin/entite-administrative-create-admin.component';
import { EntiteAdministrativeEditAdminComponent } from './entite-administrative-admin/edit-admin/entite-administrative-edit-admin.component';
import { EntiteAdministrativeViewAdminComponent } from './entite-administrative-admin/view-admin/entite-administrative-view-admin.component';
import { EntiteAdministrativeListAdminComponent } from './entite-administrative-admin/list-admin/entite-administrative-list-admin.component';
import { UtilisateurCreateAdminComponent } from './utilisateur-admin/create-admin/utilisateur-create-admin.component';
import { UtilisateurEditAdminComponent } from './utilisateur-admin/edit-admin/utilisateur-edit-admin.component';
import { UtilisateurViewAdminComponent } from './utilisateur-admin/view-admin/utilisateur-view-admin.component';
import { UtilisateurListAdminComponent } from './utilisateur-admin/list-admin/utilisateur-list-admin.component';
import { GroupeCreateAdminComponent } from './groupe-admin/create-admin/groupe-create-admin.component';
import { GroupeEditAdminComponent } from './groupe-admin/edit-admin/groupe-edit-admin.component';
import { GroupeViewAdminComponent } from './groupe-admin/view-admin/groupe-view-admin.component';
import { GroupeListAdminComponent } from './groupe-admin/list-admin/groupe-list-admin.component';

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

    EntiteAdministrativeCreateAdminComponent,
    EntiteAdministrativeListAdminComponent,
    EntiteAdministrativeViewAdminComponent,
    EntiteAdministrativeEditAdminComponent,
    UtilisateurCreateAdminComponent,
    UtilisateurListAdminComponent,
    UtilisateurViewAdminComponent,
    UtilisateurEditAdminComponent,
    GroupeCreateAdminComponent,
    GroupeListAdminComponent,
    GroupeViewAdminComponent,
    GroupeEditAdminComponent,
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
  EntiteAdministrativeCreateAdminComponent,
  EntiteAdministrativeListAdminComponent,
  EntiteAdministrativeViewAdminComponent,
  EntiteAdministrativeEditAdminComponent,
  UtilisateurCreateAdminComponent,
  UtilisateurListAdminComponent,
  UtilisateurViewAdminComponent,
  UtilisateurEditAdminComponent,
  GroupeCreateAdminComponent,
  GroupeListAdminComponent,
  GroupeViewAdminComponent,
  GroupeEditAdminComponent,
  ],
  entryComponents: [],
})
export class UserAdminModule { }