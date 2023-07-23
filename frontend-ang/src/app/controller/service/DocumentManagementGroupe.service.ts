import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DocumentManagementGroupeDto} from '../model/DocumentManagementGroupe.model';
import {DocumentManagementGroupeCriteria} from '../criteria/DocumentManagementGroupeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {GroupeDto} from '../model/Groupe.model';
import {AcessManagementDto} from '../model/AcessManagement.model';
import {DocumentDto} from '../model/Document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentManagementGroupeService extends AbstractService<DocumentManagementGroupeDto, DocumentManagementGroupeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/documentManagementGroupe/');
    }

    public constrcutDto(): DocumentManagementGroupeDto {
        return new DocumentManagementGroupeDto();
    }

    public constrcutCriteria(): DocumentManagementGroupeCriteria {
        return new DocumentManagementGroupeCriteria();
    }
}
