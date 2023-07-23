import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {UtilisateurService} from 'src/app/controller/service/Utilisateur.service';
import {UtilisateurDto} from 'src/app/controller/model/Utilisateur.model';
import {UtilisateurCriteria} from 'src/app/controller/criteria/UtilisateurCriteria.model';

@Component({
  selector: 'app-utilisateur-view-admin',
  templateUrl: './utilisateur-view-admin.component.html'
})
export class UtilisateurViewAdminComponent extends AbstractViewController<UtilisateurDto, UtilisateurCriteria, UtilisateurService> implements OnInit {


    constructor(private utilisateurService: UtilisateurService){
        super(utilisateurService);
    }

    ngOnInit(): void {
    }




}
