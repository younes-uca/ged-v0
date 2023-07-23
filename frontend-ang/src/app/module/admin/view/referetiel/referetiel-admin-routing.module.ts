
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { AcessManagementListAdminComponent } from './acess-management-admin/list-admin/acess-management-list-admin.component';
import { AcessShareListAdminComponent } from './acess-share-admin/list-admin/acess-share-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'acess-management',
                            children: [
                                {
                                    path: 'list',
                                    component: AcessManagementListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'acess-share',
                            children: [
                                {
                                    path: 'list',
                                    component: AcessShareListAdminComponent ,
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
export class ReferetielAdminRoutingModule { }
