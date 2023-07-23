import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {GroupeService} from 'src/app/controller/service/Groupe.service';
import {GroupeDto} from 'src/app/controller/model/Groupe.model';
import {GroupeCriteria} from 'src/app/controller/criteria/GroupeCriteria.model';

import {UtilisateurDto} from 'src/app/controller/model/Utilisateur.model';
import {UtilisateurService} from 'src/app/controller/service/Utilisateur.service';
import {GroupeUtilisateurDto} from 'src/app/controller/model/GroupeUtilisateur.model';
import {GroupeUtilisateurService} from 'src/app/controller/service/GroupeUtilisateur.service';
@Component({
  selector: 'app-groupe-view-admin',
  templateUrl: './groupe-view-admin.component.html'
})
export class GroupeViewAdminComponent extends AbstractViewController<GroupeDto, GroupeCriteria, GroupeService> implements OnInit {

    groupeUtilisateurs = new GroupeUtilisateurDto();
    groupeUtilisateurss: Array<GroupeUtilisateurDto> = [];

    constructor(private groupeService: GroupeService, private utilisateurService: UtilisateurService, private groupeUtilisateurService: GroupeUtilisateurService){
        super(groupeService);
    }

    ngOnInit(): void {
        this.groupeUtilisateurs.utilisateur = new UtilisateurDto();
        this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
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
