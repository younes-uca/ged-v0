import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DocumentAcessShareDto} from '../model/DocumentAcessShare.model';
import {DocumentAcessShareCriteria} from '../criteria/DocumentAcessShareCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {AcessShareDto} from '../model/AcessShare.model';
import {DocumentDto} from '../model/Document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentAcessShareService extends AbstractService<DocumentAcessShareDto, DocumentAcessShareCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/documentAcessShare/');
    }

    public constrcutDto(): DocumentAcessShareDto {
        return new DocumentAcessShareDto();
    }

    public constrcutCriteria(): DocumentAcessShareCriteria {
        return new DocumentAcessShareCriteria();
    }
}
