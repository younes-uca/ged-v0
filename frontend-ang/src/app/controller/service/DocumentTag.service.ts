import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DocumentTagDto} from '../model/DocumentTag.model';
import {DocumentTagCriteria} from '../criteria/DocumentTagCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {TagDto} from '../model/Tag.model';
import {DocumentDto} from '../model/Document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentTagService extends AbstractService<DocumentTagDto, DocumentTagCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/documentTag/');
    }

    public constrcutDto(): DocumentTagDto {
        return new DocumentTagDto();
    }

    public constrcutCriteria(): DocumentTagCriteria {
        return new DocumentTagCriteria();
    }
}
