import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DocumentTypeDto} from '../model/DocumentType.model';
import {DocumentTypeCriteria} from '../criteria/DocumentTypeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService extends AbstractService<DocumentTypeDto, DocumentTypeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/documentType/');
    }

    public constrcutDto(): DocumentTypeDto {
        return new DocumentTypeDto();
    }

    public constrcutCriteria(): DocumentTypeCriteria {
        return new DocumentTypeCriteria();
    }
}
