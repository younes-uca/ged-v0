import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DocumentManagementUtilisateurDto} from '../model/DocumentManagementUtilisateur.model';
import {DocumentManagementUtilisateurCriteria} from '../criteria/DocumentManagementUtilisateurCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {AcessManagementDto} from '../model/AcessManagement.model';
import {DocumentDto} from '../model/Document.model';
import {UtilisateurDto} from '../model/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentManagementUtilisateurService extends AbstractService<DocumentManagementUtilisateurDto, DocumentManagementUtilisateurCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/documentManagementUtilisateur/');
    }

    public constrcutDto(): DocumentManagementUtilisateurDto {
        return new DocumentManagementUtilisateurDto();
    }

    public constrcutCriteria(): DocumentManagementUtilisateurCriteria {
        return new DocumentManagementUtilisateurCriteria();
    }
}
