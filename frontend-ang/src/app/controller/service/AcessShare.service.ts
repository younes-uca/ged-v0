import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AcessShareDto} from '../model/AcessShare.model';
import {AcessShareCriteria} from '../criteria/AcessShareCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class AcessShareService extends AbstractService<AcessShareDto, AcessShareCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/acessShare/');
    }

    public constrcutDto(): AcessShareDto {
        return new AcessShareDto();
    }

    public constrcutCriteria(): AcessShareCriteria {
        return new AcessShareCriteria();
    }
}
