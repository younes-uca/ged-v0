import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EntiteAdministrativeService} from 'src/app/controller/service/EntiteAdministrative.service';
import {EntiteAdministrativeDto} from 'src/app/controller/model/EntiteAdministrative.model';
import {EntiteAdministrativeCriteria} from 'src/app/controller/criteria/EntiteAdministrativeCriteria.model';

import {UtilisateurDto} from 'src/app/controller/model/Utilisateur.model';
import {UtilisateurService} from 'src/app/controller/service/Utilisateur.service';
@Component({
  selector: 'app-entite-administrative-view-admin',
  templateUrl: './entite-administrative-view-admin.component.html'
})
export class EntiteAdministrativeViewAdminComponent extends AbstractViewController<EntiteAdministrativeDto, EntiteAdministrativeCriteria, EntiteAdministrativeService> implements OnInit {


    constructor(private entiteAdministrativeService: EntiteAdministrativeService, private utilisateurService: UtilisateurService){
        super(entiteAdministrativeService);
    }

    ngOnInit(): void {
        this.utilisateur = new UtilisateurDto();
        this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
    }


    get utilisateur(): UtilisateurDto {
       return this.utilisateurService.item;
    }
    set utilisateur(value: UtilisateurDto) {
        this.utilisateurService.item = value;
    }
    get utilisateurs():Array<UtilisateurDto> {
       return this.utilisateurService.items;
    }
    set utilisateurs(value: Array<UtilisateurDto>) {
        this.utilisateurService.items = value;
    }


}
