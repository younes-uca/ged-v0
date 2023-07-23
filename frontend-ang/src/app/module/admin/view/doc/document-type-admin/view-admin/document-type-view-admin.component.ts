import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {DocumentTypeService} from 'src/app/controller/service/DocumentType.service';
import {DocumentTypeDto} from 'src/app/controller/model/DocumentType.model';
import {DocumentTypeCriteria} from 'src/app/controller/criteria/DocumentTypeCriteria.model';

@Component({
  selector: 'app-document-type-view-admin',
  templateUrl: './document-type-view-admin.component.html'
})
export class DocumentTypeViewAdminComponent extends AbstractViewController<DocumentTypeDto, DocumentTypeCriteria, DocumentTypeService> implements OnInit {


    constructor(private documentTypeService: DocumentTypeService){
        super(documentTypeService);
    }

    ngOnInit(): void {
    }




}
