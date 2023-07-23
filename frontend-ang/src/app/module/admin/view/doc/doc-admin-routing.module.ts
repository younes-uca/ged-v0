
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { DocumentListAdminComponent } from './document-admin/list-admin/document-list-admin.component';
import { TagListAdminComponent } from './tag-admin/list-admin/tag-list-admin.component';
import { DocumentTypeListAdminComponent } from './document-type-admin/list-admin/document-type-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'document',
                            children: [
                                {
                                    path: 'list',
                                    component: DocumentListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'tag',
                            children: [
                                {
                                    path: 'list',
                                    component: TagListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'document-type',
                            children: [
                                {
                                    path: 'list',
                                    component: DocumentTypeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class DocAdminRoutingModule { }
