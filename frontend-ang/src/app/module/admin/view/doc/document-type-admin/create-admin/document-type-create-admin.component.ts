import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {DocumentTypeService} from 'src/app/controller/service/DocumentType.service';
import {DocumentTypeDto} from 'src/app/controller/model/DocumentType.model';
import {DocumentTypeCriteria} from 'src/app/controller/criteria/DocumentTypeCriteria.model';
@Component({
  selector: 'app-document-type-create-admin',
  templateUrl: './document-type-create-admin.component.html'
})
export class DocumentTypeCreateAdminComponent extends AbstractCreateController<DocumentTypeDto, DocumentTypeCriteria, DocumentTypeService>  implements OnInit {



   private _validDocumentTypeCode = true;
   private _validDocumentTypeLibelle = true;

    constructor( private documentTypeService: DocumentTypeService ) {
        super(documentTypeService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validDocumentTypeCode = value;
        this.validDocumentTypeLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDocumentTypeCode();
        this.validateDocumentTypeLibelle();
    }

    public validateDocumentTypeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validDocumentTypeCode = false;
        } else {
            this.validDocumentTypeCode = true;
        }
    }
    public validateDocumentTypeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validDocumentTypeLibelle = false;
        } else {
            this.validDocumentTypeLibelle = true;
        }
    }






    get validDocumentTypeCode(): boolean {
        return this._validDocumentTypeCode;
    }

    set validDocumentTypeCode(value: boolean) {
         this._validDocumentTypeCode = value;
    }
    get validDocumentTypeLibelle(): boolean {
        return this._validDocumentTypeLibelle;
    }

    set validDocumentTypeLibelle(value: boolean) {
         this._validDocumentTypeLibelle = value;
    }



}
