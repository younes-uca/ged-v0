import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from 'src/app/controller/service/Utilisateur.service';
import {UtilisateurDto} from 'src/app/controller/model/Utilisateur.model';
import {UtilisateurCriteria} from 'src/app/controller/criteria/UtilisateurCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-utilisateur-list-admin',
  templateUrl: './utilisateur-list-admin.component.html'
})
export class UtilisateurListAdminComponent extends AbstractListController<UtilisateurDto, UtilisateurCriteria, UtilisateurService>  implements OnInit {

    fileName = 'Utilisateur';


constructor( private utilisateurService: UtilisateurService ) {
        super(utilisateurService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadUtilisateurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Utilisateur', 'list');
        isPermistted ? this.service.findAll().subscribe(utilisateurs => this.items = utilisateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'email', header: 'Email'},
            {field: 'name', header: 'Name'},
        ];
    }



	public initDuplicate(res: UtilisateurDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Email': e.email ,
                 'Name': e.name ,
            }
        });

        this.criteriaData = [{
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Name': this.criteria.name ? this.criteria.name : environment.emptyForExport ,
        }];
      }
}
