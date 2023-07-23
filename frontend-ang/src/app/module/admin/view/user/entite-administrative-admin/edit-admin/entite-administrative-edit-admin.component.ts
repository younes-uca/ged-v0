import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {EntiteAdministrativeService} from 'src/app/controller/service/EntiteAdministrative.service';
import {EntiteAdministrativeDto} from 'src/app/controller/model/EntiteAdministrative.model';
import {EntiteAdministrativeCriteria} from 'src/app/controller/criteria/EntiteAdministrativeCriteria.model';


import {UtilisateurDto} from 'src/app/controller/model/Utilisateur.model';
import {UtilisateurService} from 'src/app/controller/service/Utilisateur.service';

@Component({
  selector: 'app-entite-administrative-edit-admin',
  templateUrl: './entite-administrative-edit-admin.component.html'
})
export class EntiteAdministrativeEditAdminComponent extends AbstractEditController<EntiteAdministrativeDto, EntiteAdministrativeCriteria, EntiteAdministrativeService>   implements OnInit {


    private _validEntiteAdministrativeCode = true;
    private _validEntiteAdministrativeLibelle = true;

    private _validUtilisateurEmail = true;
    private _validUtilisateurName = true;



    constructor( private entiteAdministrativeService: EntiteAdministrativeService , private utilisateurService: UtilisateurService) {
        super(entiteAdministrativeService);
    }

    ngOnInit(): void {
    this.utilisateur = new UtilisateurDto();
    this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
}


    public setValidation(value : boolean){
        this.validEntiteAdministrativeCode = value;
        this.validEntiteAdministrativeLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEntiteAdministrativeCode();
        this.validateEntiteAdministrativeLibelle();
    }
    public validateEntiteAdministrativeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEntiteAdministrativeCode = false;
        } else {
            this.validEntiteAdministrativeCode = true;
        }
    }
    public validateEntiteAdministrativeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEntiteAdministrativeLibelle = false;
        } else {
            this.validEntiteAdministrativeLibelle = true;
        }
    }



   public async openCreateUtilisateur(utilisateur: string) {
        const isPermistted = await this.roleService.isPermitted('Utilisateur', 'edit');
        if(isPermistted) {
             this.utilisateur = new UtilisateurDto();
             this.createUtilisateurDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get utilisateur(): UtilisateurDto {
       return this.utilisateurService.item;
   }
  set utilisateur(value: UtilisateurDto) {
        this.utilisateurService.item = value;
   }
   get utilisateurs(): Array<UtilisateurDto> {
        return this.utilisateurService.items;
   }
   set utilisateurs(value: Array<UtilisateurDto>) {
        this.utilisateurService.items = value;
   }
   get createUtilisateurDialog(): boolean {
       return this.utilisateurService.createDialog;
   }
  set createUtilisateurDialog(value: boolean) {
       this.utilisateurService.createDialog= value;
   }


    get validEntiteAdministrativeCode(): boolean {
        return this._validEntiteAdministrativeCode;
    }
    set validEntiteAdministrativeCode(value: boolean) {
        this._validEntiteAdministrativeCode = value;
    }
    get validEntiteAdministrativeLibelle(): boolean {
        return this._validEntiteAdministrativeLibelle;
    }
    set validEntiteAdministrativeLibelle(value: boolean) {
        this._validEntiteAdministrativeLibelle = value;
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
