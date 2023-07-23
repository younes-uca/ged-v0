import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TagService} from 'src/app/controller/service/Tag.service';
import {TagDto} from 'src/app/controller/model/Tag.model';
import {TagCriteria} from 'src/app/controller/criteria/TagCriteria.model';



@Component({
  selector: 'app-tag-edit-admin',
  templateUrl: './tag-edit-admin.component.html'
})
export class TagEditAdminComponent extends AbstractEditController<TagDto, TagCriteria, TagService>   implements OnInit {


    private _validTagCode = true;
    private _validTagLibelle = true;




    constructor( private tagService: TagService ) {
        super(tagService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validTagCode = value;
        this.validTagLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTagCode();
        this.validateTagLibelle();
    }
    public validateTagCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTagCode = false;
        } else {
            this.validTagCode = true;
        }
    }
    public validateTagLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTagLibelle = false;
        } else {
            this.validTagLibelle = true;
        }
    }






    get validTagCode(): boolean {
        return this._validTagCode;
    }
    set validTagCode(value: boolean) {
        this._validTagCode = value;
    }
    get validTagLibelle(): boolean {
        return this._validTagLibelle;
    }
    set validTagLibelle(value: boolean) {
        this._validTagLibelle = value;
    }

}
