import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {UtilisateurService} from 'src/app/controller/service/Utilisateur.service';
import {UtilisateurDto} from 'src/app/controller/model/Utilisateur.model';
import {UtilisateurCriteria} from 'src/app/controller/criteria/UtilisateurCriteria.model';
@Component({
  selector: 'app-utilisateur-create-admin',
  templateUrl: './utilisateur-create-admin.component.html'
})
export class UtilisateurCreateAdminComponent extends AbstractCreateController<UtilisateurDto, UtilisateurCriteria, UtilisateurService>  implements OnInit {



   private _validUtilisateurEmail = true;
   private _validUtilisateurName = true;

    constructor( private utilisateurService: UtilisateurService ) {
        super(utilisateurService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validUtilisateurEmail = value;
        this.validUtilisateurName = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateUtilisateurEmail();
        this.validateUtilisateurName();
    }

    public validateUtilisateurEmail(){
        if (this.stringUtilService.isEmpty(this.item.email)) {
        this.errorMessages.push('Email non valide');
        this.validUtilisateurEmail = false;
        } else {
            this.validUtilisateurEmail = true;
        }
    }
    public validateUtilisateurName(){
        if (this.stringUtilService.isEmpty(this.item.name)) {
        this.errorMessages.push('Name non valide');
        this.validUtilisateurName = false;
        } else {
            this.validUtilisateurName = true;
        }
    }






    get validUtilisateurEmail(): boolean {
        return this._validUtilisateurEmail;
    }

    set validUtilisateurEmail(value: boolean) {
         this._validUtilisateurEmail = value;
    }
    get validUtilisateurName(): boolean {
        return this._validUtilisateurName;
    }

    set validUtilisateurName(value: boolean) {
         this._validUtilisateurName = value;
    }



}
