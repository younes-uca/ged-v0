import {Component, OnInit} from '@angular/core';
import {GroupeService} from 'src/app/controller/service/Groupe.service';
import {GroupeDto} from 'src/app/controller/model/Groupe.model';
import {GroupeCriteria} from 'src/app/controller/criteria/GroupeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {UtilisateurDto} from 'src/app/controller/model/Utilisateur.model';
import {UtilisateurService} from 'src/app/controller/service/Utilisateur.service';
import {GroupeUtilisateurDto} from 'src/app/controller/model/GroupeUtilisateur.model';
import {GroupeUtilisateurService} from 'src/app/controller/service/GroupeUtilisateur.service';


@Component({
  selector: 'app-groupe-list-admin',
  templateUrl: './groupe-list-admin.component.html'
})
export class GroupeListAdminComponent extends AbstractListController<GroupeDto, GroupeCriteria, GroupeService>  implements OnInit {

    fileName = 'Groupe';

    utilisateurs :Array<UtilisateurDto>;

constructor( private groupeService: GroupeService , private utilisateurService: UtilisateurService, private groupeUtilisateurService: GroupeUtilisateurService) {
        super(groupeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadUtilisateur();
    }

    public async loadGroupes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Groupe', 'list');
        isPermistted ? this.service.findAll().subscribe(groupes => this.items = groupes,error=>console.log(error))
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
        const isPermistted = await this.roleService.isPermitted('Groupe', 'list');
        isPermistted ? this.utilisateurService.findAllOptimized().subscribe(utilisateurs => this.utilisateurs = utilisateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: GroupeDto) {
        if (res.groupeUtilisateurs != null) {
             res.groupeUtilisateurs.forEach(d => { d.groupe = null; d.id = null; });
        }
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
