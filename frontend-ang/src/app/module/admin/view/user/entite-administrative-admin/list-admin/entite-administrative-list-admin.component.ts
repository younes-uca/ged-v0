import {Component, OnInit} from '@angular/core';
import {EntiteAdministrativeService} from 'src/app/controller/service/EntiteAdministrative.service';
import {EntiteAdministrativeDto} from 'src/app/controller/model/EntiteAdministrative.model';
import {EntiteAdministrativeCriteria} from 'src/app/controller/criteria/EntiteAdministrativeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {UtilisateurDto} from 'src/app/controller/model/Utilisateur.model';
import {UtilisateurService} from 'src/app/controller/service/Utilisateur.service';


@Component({
  selector: 'app-entite-administrative-list-admin',
  templateUrl: './entite-administrative-list-admin.component.html'
})
export class EntiteAdministrativeListAdminComponent extends AbstractListController<EntiteAdministrativeDto, EntiteAdministrativeCriteria, EntiteAdministrativeService>  implements OnInit {

    fileName = 'EntiteAdministrative';

    utilisateurs :Array<UtilisateurDto>;

constructor( private entiteAdministrativeService: EntiteAdministrativeService , private utilisateurService: UtilisateurService) {
        super(entiteAdministrativeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadUtilisateur();
    }

    public async loadEntiteAdministratives(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EntiteAdministrative', 'list');
        isPermistted ? this.service.findAll().subscribe(entiteAdministratives => this.items = entiteAdministratives,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'utilisateur?.name', header: 'Utilisateur'},
        ];
    }


    public async loadUtilisateur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EntiteAdministrative', 'list');
        isPermistted ? this.utilisateurService.findAllOptimized().subscribe(utilisateurs => this.utilisateurs = utilisateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: EntiteAdministrativeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Utilisateur': e.utilisateur?.name ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Utilisateur': this.criteria.utilisateur?.name ? this.criteria.utilisateur?.name : environment.emptyForExport ,
        }];
      }
}
