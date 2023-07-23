import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DocumentPartageGroupeDto} from '../model/DocumentPartageGroupe.model';
import {DocumentPartageGroupeCriteria} from '../criteria/DocumentPartageGroupeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {AcessShareDto} from '../model/AcessShare.model';
import {GroupeDto} from '../model/Groupe.model';
import {DocumentDto} from '../model/Document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentPartageGroupeService extends AbstractService<DocumentPartageGroupeDto, DocumentPartageGroupeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/documentPartageGroupe/');
    }

    public constrcutDto(): DocumentPartageGroupeDto {
        return new DocumentPartageGroupeDto();
    }

    public constrcutCriteria(): DocumentPartageGroupeCriteria {
        return new DocumentPartageGroupeCriteria();
    }
}
