import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {GroupeUtilisateurDto} from '../model/GroupeUtilisateur.model';
import {GroupeUtilisateurCriteria} from '../criteria/GroupeUtilisateurCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {GroupeDto} from '../model/Groupe.model';
import {UtilisateurDto} from '../model/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class GroupeUtilisateurService extends AbstractService<GroupeUtilisateurDto, GroupeUtilisateurCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/groupeUtilisateur/');
    }

    public constrcutDto(): GroupeUtilisateurDto {
        return new GroupeUtilisateurDto();
    }

    public constrcutCriteria(): GroupeUtilisateurCriteria {
        return new GroupeUtilisateurCriteria();
    }
}
