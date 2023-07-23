import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {AcessShareService} from 'src/app/controller/service/AcessShare.service';
import {AcessShareDto} from 'src/app/controller/model/AcessShare.model';
import {AcessShareCriteria} from 'src/app/controller/criteria/AcessShareCriteria.model';



@Component({
  selector: 'app-acess-share-edit-admin',
  templateUrl: './acess-share-edit-admin.component.html'
})
export class AcessShareEditAdminComponent extends AbstractEditController<AcessShareDto, AcessShareCriteria, AcessShareService>   implements OnInit {


    private _validAcessShareCode = true;
    private _validAcessShareLibelle = true;




    constructor( private acessShareService: AcessShareService ) {
        super(acessShareService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validAcessShareCode = value;
        this.validAcessShareLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAcessShareCode();
        this.validateAcessShareLibelle();
    }
    public validateAcessShareCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validAcessShareCode = false;
        } else {
            this.validAcessShareCode = true;
        }
    }
    public validateAcessShareLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validAcessShareLibelle = false;
        } else {
            this.validAcessShareLibelle = true;
        }
    }






    get validAcessShareCode(): boolean {
        return this._validAcessShareCode;
    }
    set validAcessShareCode(value: boolean) {
        this._validAcessShareCode = value;
    }
    get validAcessShareLibelle(): boolean {
        return this._validAcessShareLibelle;
    }
    set validAcessShareLibelle(value: boolean) {
        this._validAcessShareLibelle = value;
    }

}
