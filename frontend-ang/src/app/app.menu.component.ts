import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              {
                label: 'Collaborator',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste tag',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/doc/tag/list']
                    },
                    {
                      label: 'Liste document type',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/doc/document-type/list']
                    },
                ]
              },
              {
                label: 'Document Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste document',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/doc/document/list']
                    },
                ]
              },
              {
                label: 'Referentiel',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste acess management',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referetiel/acess-management/list']
                    },
                    {
                      label: 'Liste acess share',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referetiel/acess-share/list']
                    },
                ]
              },
              {
                label: 'User Management',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste entite administrative',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/user/entite-administrative/list']
                    },
                    {
                      label: 'Liste utilisateur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/user/utilisateur/list']
                    },
                    {
                      label: 'Liste groupe',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/user/groupe/list']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
