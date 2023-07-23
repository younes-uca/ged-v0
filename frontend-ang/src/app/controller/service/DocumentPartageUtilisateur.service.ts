import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DocumentPartageUtilisateurDto} from '../model/DocumentPartageUtilisateur.model';
import {DocumentPartageUtilisateurCriteria} from '../criteria/DocumentPartageUtilisateurCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {AcessShareDto} from '../model/AcessShare.model';
import {DocumentDto} from '../model/Document.model';
import {UtilisateurDto} from '../model/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentPartageUtilisateurService extends AbstractService<DocumentPartageUtilisateurDto, DocumentPartageUtilisateurCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/documentPartageUtilisateur/');
    }

    public constrcutDto(): DocumentPartageUtilisateurDto {
        return new DocumentPartageUtilisateurDto();
    }

    public constrcutCriteria(): DocumentPartageUtilisateurCriteria {
        return new DocumentPartageUtilisateurCriteria();
    }
}
