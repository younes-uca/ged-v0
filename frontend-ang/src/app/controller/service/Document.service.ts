import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DocumentDto} from '../model/Document.model';
import {DocumentCriteria} from '../criteria/DocumentCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {DocumentPartageGroupeDto} from '../model/DocumentPartageGroupe.model';
import {DocumentTagDto} from '../model/DocumentTag.model';
import {DocumentPartageUtilisateurDto} from '../model/DocumentPartageUtilisateur.model';
import {DocumentTypeDto} from '../model/DocumentType.model';
import {EntiteAdministrativeDto} from '../model/EntiteAdministrative.model';
import {DocumentManagementGroupeDto} from '../model/DocumentManagementGroupe.model';
import {DocumentAcessShareDto} from '../model/DocumentAcessShare.model';
import {UtilisateurDto} from '../model/Utilisateur.model';
import {DocumentManagementUtilisateurDto} from '../model/DocumentManagementUtilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends AbstractService<DocumentDto, DocumentCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/document/');
    }

    public constrcutDto(): DocumentDto {
        return new DocumentDto();
    }

    public constrcutCriteria(): DocumentCriteria {
        return new DocumentCriteria();
    }
}
