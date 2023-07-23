import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {AcessShareService} from 'src/app/controller/service/AcessShare.service';
import {AcessShareDto} from 'src/app/controller/model/AcessShare.model';
import {AcessShareCriteria} from 'src/app/controller/criteria/AcessShareCriteria.model';

@Component({
  selector: 'app-acess-share-view-admin',
  templateUrl: './acess-share-view-admin.component.html'
})
export class AcessShareViewAdminComponent extends AbstractViewController<AcessShareDto, AcessShareCriteria, AcessShareService> implements OnInit {


    constructor(private acessShareService: AcessShareService){
        super(acessShareService);
    }

    ngOnInit(): void {
    }




}
