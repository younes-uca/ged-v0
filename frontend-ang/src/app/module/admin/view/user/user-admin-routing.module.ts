
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { EntiteAdministrativeListAdminComponent } from './entite-administrative-admin/list-admin/entite-administrative-list-admin.component';
import { UtilisateurListAdminComponent } from './utilisateur-admin/list-admin/utilisateur-list-admin.component';
import { GroupeListAdminComponent } from './groupe-admin/list-admin/groupe-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'entite-administrative',
                            children: [
                                {
                                    path: 'list',
                                    component: EntiteAdministrativeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'utilisateur',
                            children: [
                                {
                                    path: 'list',
                                    component: UtilisateurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'groupe',
                            children: [
                                {
                                    path: 'list',
                                    component: GroupeListAdminComponent ,
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
export class UserAdminRoutingModule { }
