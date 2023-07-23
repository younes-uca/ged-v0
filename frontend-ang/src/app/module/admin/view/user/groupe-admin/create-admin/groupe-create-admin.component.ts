import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {GroupeService} from 'src/app/controller/service/Groupe.service';
import {GroupeDto} from 'src/app/controller/model/Groupe.model';
import {GroupeCriteria} from 'src/app/controller/criteria/GroupeCriteria.model';
import {UtilisateurDto} from 'src/app/controller/model/Utilisateur.model';
import {UtilisateurService} from 'src/app/controller/service/Utilisateur.service';
import {GroupeUtilisateurDto} from 'src/app/controller/model/GroupeUtilisateur.model';
import {GroupeUtilisateurService} from 'src/app/controller/service/GroupeUtilisateur.service';
@Component({
  selector: 'app-groupe-create-admin',
  templateUrl: './groupe-create-admin.component.html'
})
export class GroupeCreateAdminComponent extends AbstractCreateController<GroupeDto, GroupeCriteria, GroupeService>  implements OnInit {

    private _groupeUtilisateursElement = new GroupeUtilisateurDto();


   private _validGroupeCode = true;
   private _validGroupeLibelle = true;
    private _validUtilisateurEmail = true;
    private _validUtilisateurName = true;
    private _groupeUtilisateurs: Array<GroupeUtilisateurDto> = [];

    constructor( private groupeService: GroupeService , private utilisateurService: UtilisateurService, private groupeUtilisateurService: GroupeUtilisateurService) {
        super(groupeService);
    }

    ngOnInit(): void {
        this.utilisateurService.findAll().subscribe(data => this.prepareGroupeUtilisateurs(data));
        this.groupeUtilisateursElement.utilisateur = new UtilisateurDto();
        this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
    this.utilisateur = new UtilisateurDto();
    this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
}


     prepareGroupeUtilisateurs(utilisateurs: Array<UtilisateurDto>): void{
        if( utilisateurs != null){
                utilisateurs.forEach(e => {
                const groupeUtilisateur = new GroupeUtilisateurDto();
                groupeUtilisateur.utilisateur = e;
                this.groupeUtilisateurs.push(groupeUtilisateur);
            });
        }
    }



    public setValidation(value: boolean){
        this.validGroupeCode = value;
        this.validGroupeLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateGroupeCode();
        this.validateGroupeLibelle();
    }

    public validateGroupeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validGroupeCode = false;
        } else {
            this.validGroupeCode = true;
        }
    }
    public validateGroupeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validGroupeLibelle = false;
        } else {
            this.validGroupeLibelle = true;
        }
    }


    public async openCreateUtilisateur(utilisateur: string) {
    const isPermistted = await this.roleService.isPermitted('Utilisateur', 'add');
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

    get groupeUtilisateurs(): Array<GroupeUtilisateurDto> {
        if( this._groupeUtilisateurs == null )
            this._groupeUtilisateurs = new Array();
        return this._groupeUtilisateurs;
    }

    set groupeUtilisateurs(value: Array<GroupeUtilisateurDto>) {
        this._groupeUtilisateurs = value;
    }


    get validGroupeCode(): boolean {
        return this._validGroupeCode;
    }

    set validGroupeCode(value: boolean) {
         this._validGroupeCode = value;
    }
    get validGroupeLibelle(): boolean {
        return this._validGroupeLibelle;
    }

    set validGroupeLibelle(value: boolean) {
         this._validGroupeLibelle = value;
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

    get groupeUtilisateursElement(): GroupeUtilisateurDto {
        if( this._groupeUtilisateursElement == null )
            this._groupeUtilisateursElement = new GroupeUtilisateurDto();
        return this._groupeUtilisateursElement;
    }

    set groupeUtilisateursElement(value: GroupeUtilisateurDto) {
        this._groupeUtilisateursElement = value;
    }

}
