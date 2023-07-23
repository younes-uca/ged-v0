import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {AcessManagementService} from 'src/app/controller/service/AcessManagement.service';
import {AcessManagementDto} from 'src/app/controller/model/AcessManagement.model';
import {AcessManagementCriteria} from 'src/app/controller/criteria/AcessManagementCriteria.model';
@Component({
  selector: 'app-acess-management-create-admin',
  templateUrl: './acess-management-create-admin.component.html'
})
export class AcessManagementCreateAdminComponent extends AbstractCreateController<AcessManagementDto, AcessManagementCriteria, AcessManagementService>  implements OnInit {



   private _validAcessManagementCode = true;
   private _validAcessManagementLibelle = true;

    constructor( private acessManagementService: AcessManagementService ) {
        super(acessManagementService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validAcessManagementCode = value;
        this.validAcessManagementLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAcessManagementCode();
        this.validateAcessManagementLibelle();
    }

    public validateAcessManagementCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validAcessManagementCode = false;
        } else {
            this.validAcessManagementCode = true;
        }
    }
    public validateAcessManagementLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validAcessManagementLibelle = false;
        } else {
            this.validAcessManagementLibelle = true;
        }
    }






    get validAcessManagementCode(): boolean {
        return this._validAcessManagementCode;
    }

    set validAcessManagementCode(value: boolean) {
         this._validAcessManagementCode = value;
    }
    get validAcessManagementLibelle(): boolean {
        return this._validAcessManagementLibelle;
    }

    set validAcessManagementLibelle(value: boolean) {
         this._validAcessManagementLibelle = value;
    }



}
