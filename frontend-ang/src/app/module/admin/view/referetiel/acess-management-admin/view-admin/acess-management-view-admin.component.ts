import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {AcessManagementService} from 'src/app/controller/service/AcessManagement.service';
import {AcessManagementDto} from 'src/app/controller/model/AcessManagement.model';
import {AcessManagementCriteria} from 'src/app/controller/criteria/AcessManagementCriteria.model';

@Component({
  selector: 'app-acess-management-view-admin',
  templateUrl: './acess-management-view-admin.component.html'
})
export class AcessManagementViewAdminComponent extends AbstractViewController<AcessManagementDto, AcessManagementCriteria, AcessManagementService> implements OnInit {


    constructor(private acessManagementService: AcessManagementService){
        super(acessManagementService);
    }

    ngOnInit(): void {
    }




}
