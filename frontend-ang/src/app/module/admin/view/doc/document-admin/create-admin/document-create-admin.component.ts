import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {DocumentService} from 'src/app/controller/service/Document.service';
import {DocumentDto} from 'src/app/controller/model/Document.model';
import {DocumentCriteria} from 'src/app/controller/criteria/DocumentCriteria.model';
import {GroupeDto} from 'src/app/controller/model/Groupe.model';
import {GroupeService} from 'src/app/controller/service/Groupe.service';
import {DocumentTypeDto} from 'src/app/controller/model/DocumentType.model';
import {DocumentTypeService} from 'src/app/controller/service/DocumentType.service';
import {TagDto} from 'src/app/controller/model/Tag.model';
import {TagService} from 'src/app/controller/service/Tag.service';
import {EntiteAdministrativeDto} from 'src/app/controller/model/EntiteAdministrative.model';
import {EntiteAdministrativeService} from 'src/app/controller/service/EntiteAdministrative.service';
import {AcessManagementDto} from 'src/app/controller/model/AcessManagement.model';
import {AcessManagementService} from 'src/app/controller/service/AcessManagement.service';
import {DocumentTagDto} from 'src/app/controller/model/DocumentTag.model';
import {DocumentTagService} from 'src/app/controller/service/DocumentTag.service';
import {UtilisateurDto} from 'src/app/controller/model/Utilisateur.model';
import {UtilisateurService} from 'src/app/controller/service/Utilisateur.service';
import {DocumentManagementGroupeDto} from 'src/app/controller/model/DocumentManagementGroupe.model';
import {DocumentManagementGroupeService} from 'src/app/controller/service/DocumentManagementGroupe.service';
import {AcessShareDto} from 'src/app/controller/model/AcessShare.model';
import {AcessShareService} from 'src/app/controller/service/AcessShare.service';
import {DocumentPartageUtilisateurDto} from 'src/app/controller/model/DocumentPartageUtilisateur.model';
import {DocumentPartageUtilisateurService} from 'src/app/controller/service/DocumentPartageUtilisateur.service';
import {DocumentManagementUtilisateurDto} from 'src/app/controller/model/DocumentManagementUtilisateur.model';
import {DocumentManagementUtilisateurService} from 'src/app/controller/service/DocumentManagementUtilisateur.service';
import {DocumentPartageGroupeDto} from 'src/app/controller/model/DocumentPartageGroupe.model';
import {DocumentPartageGroupeService} from 'src/app/controller/service/DocumentPartageGroupe.service';
import {DocumentAcessShareDto} from 'src/app/controller/model/DocumentAcessShare.model';
import {DocumentAcessShareService} from 'src/app/controller/service/DocumentAcessShare.service';
@Component({
  selector: 'app-document-create-admin',
  templateUrl: './document-create-admin.component.html'
})
export class DocumentCreateAdminComponent extends AbstractCreateController<DocumentDto, DocumentCriteria, DocumentService>  implements OnInit {

    private _documentPartageGroupesElement = new DocumentPartageGroupeDto();
    private _documentPartageUtilisateursElement = new DocumentPartageUtilisateurDto();
    private _documentManagementGroupesElement = new DocumentManagementGroupeDto();
    private _documentManagementUtilisateursElement = new DocumentManagementUtilisateurDto();
    private _documentAcessSharesElement = new DocumentAcessShareDto();
    private _documentTagsElement = new DocumentTagDto();


   private _validDocumentReference = true;
    private _validDocumentTypeCode = true;
    private _validDocumentTypeLibelle = true;
    private _validUtilisateurEmail = true;
    private _validUtilisateurName = true;
    private _validEntiteAdministrativeCode = true;
    private _validEntiteAdministrativeLibelle = true;
    private _documentAcessShares: Array<DocumentAcessShareDto> = [];
    private _documentTags: Array<DocumentTagDto> = [];

    constructor( private documentService: DocumentService , private groupeService: GroupeService, private documentTypeService: DocumentTypeService, private tagService: TagService, private entiteAdministrativeService: EntiteAdministrativeService, private acessManagementService: AcessManagementService, private documentTagService: DocumentTagService, private utilisateurService: UtilisateurService, private documentManagementGroupeService: DocumentManagementGroupeService, private acessShareService: AcessShareService, private documentPartageUtilisateurService: DocumentPartageUtilisateurService, private documentManagementUtilisateurService: DocumentManagementUtilisateurService, private documentPartageGroupeService: DocumentPartageGroupeService, private documentAcessShareService: DocumentAcessShareService) {
        super(documentService);
    }

    ngOnInit(): void {
        this.documentPartageGroupesElement.groupe = new GroupeDto();
        this.groupeService.findAll().subscribe((data) => this.groupes = data);
        this.documentPartageGroupesElement.acessShare = new AcessShareDto();
        this.acessShareService.findAll().subscribe((data) => this.acessShares = data);
        this.documentPartageUtilisateursElement.utilisateur = new UtilisateurDto();
        this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
        this.documentPartageUtilisateursElement.acessShare = new AcessShareDto();
        this.acessShareService.findAll().subscribe((data) => this.acessShares = data);
        this.documentManagementGroupesElement.groupe = new GroupeDto();
        this.groupeService.findAll().subscribe((data) => this.groupes = data);
        this.documentManagementGroupesElement.acessManagement = new AcessManagementDto();
        this.acessManagementService.findAll().subscribe((data) => this.acessManagements = data);
        this.documentManagementUtilisateursElement.utilisateur = new UtilisateurDto();
        this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
        this.documentManagementUtilisateursElement.acessManagement = new AcessManagementDto();
        this.acessManagementService.findAll().subscribe((data) => this.acessManagements = data);
        this.acessShareService.findAll().subscribe(data => this.prepareDocumentAcessShares(data));
        this.documentAcessSharesElement.acessShare = new AcessShareDto();
        this.acessShareService.findAll().subscribe((data) => this.acessShares = data);
        this.tagService.findAll().subscribe(data => this.prepareDocumentTags(data));
        this.documentTagsElement.tag = new TagDto();
        this.tagService.findAll().subscribe((data) => this.tags = data);
    this.documentType = new DocumentTypeDto();
    this.documentTypeService.findAll().subscribe((data) => this.documentTypes = data);
    this.utilisateur = new UtilisateurDto();
    this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
    this.entiteAdministrative = new EntiteAdministrativeDto();
    this.entiteAdministrativeService.findAll().subscribe((data) => this.entiteAdministratives = data);
}


     prepareDocumentAcessShares(acessShares: Array<AcessShareDto>): void{
        if( acessShares != null){
                acessShares.forEach(e => {
                const documentAcessShare = new DocumentAcessShareDto();
                documentAcessShare.acessShare = e;
                this.documentAcessShares.push(documentAcessShare);
            });
        }
    }
     prepareDocumentTags(tags: Array<TagDto>): void{
        if( tags != null){
                tags.forEach(e => {
                const documentTag = new DocumentTagDto();
                documentTag.tag = e;
                this.documentTags.push(documentTag);
            });
        }
    }

    validateDocumentPartageGroupes(){
        this.errorMessages = new Array();
    }
    validateDocumentPartageUtilisateurs(){
        this.errorMessages = new Array();
    }
    validateDocumentManagementGroupes(){
        this.errorMessages = new Array();
    }
    validateDocumentManagementUtilisateurs(){
        this.errorMessages = new Array();
    }


    public setValidation(value: boolean){
        this.validDocumentReference = value;
    }

    public addDocumentPartageGroupes() {
        if( this.item.documentPartageGroupes == null )
            this.item.documentPartageGroupes = new Array<DocumentPartageGroupeDto>();
       this.validateDocumentPartageGroupes();
       if (this.errorMessages.length === 0) {
              this.item.documentPartageGroupes.push({... this.documentPartageGroupesElement});
              this.documentPartageGroupesElement = new DocumentPartageGroupeDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletedocumentPartageGroupes(p: DocumentPartageGroupeDto) {
        this.item.documentPartageGroupes.forEach((element, index) => {
            if (element === p) { this.item.documentPartageGroupes.splice(index, 1); }
        });
    }

    public editdocumentPartageGroupes(p: DocumentPartageGroupeDto) {
        this.documentPartageGroupesElement = {... p};
        this.activeTab = 0;
    }
    public addDocumentPartageUtilisateurs() {
        if( this.item.documentPartageUtilisateurs == null )
            this.item.documentPartageUtilisateurs = new Array<DocumentPartageUtilisateurDto>();
       this.validateDocumentPartageUtilisateurs();
       if (this.errorMessages.length === 0) {
              this.item.documentPartageUtilisateurs.push({... this.documentPartageUtilisateursElement});
              this.documentPartageUtilisateursElement = new DocumentPartageUtilisateurDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletedocumentPartageUtilisateurs(p: DocumentPartageUtilisateurDto) {
        this.item.documentPartageUtilisateurs.forEach((element, index) => {
            if (element === p) { this.item.documentPartageUtilisateurs.splice(index, 1); }
        });
    }

    public editdocumentPartageUtilisateurs(p: DocumentPartageUtilisateurDto) {
        this.documentPartageUtilisateursElement = {... p};
        this.activeTab = 0;
    }
    public addDocumentManagementGroupes() {
        if( this.item.documentManagementGroupes == null )
            this.item.documentManagementGroupes = new Array<DocumentManagementGroupeDto>();
       this.validateDocumentManagementGroupes();
       if (this.errorMessages.length === 0) {
              this.item.documentManagementGroupes.push({... this.documentManagementGroupesElement});
              this.documentManagementGroupesElement = new DocumentManagementGroupeDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletedocumentManagementGroupes(p: DocumentManagementGroupeDto) {
        this.item.documentManagementGroupes.forEach((element, index) => {
            if (element === p) { this.item.documentManagementGroupes.splice(index, 1); }
        });
    }

    public editdocumentManagementGroupes(p: DocumentManagementGroupeDto) {
        this.documentManagementGroupesElement = {... p};
        this.activeTab = 0;
    }
    public addDocumentManagementUtilisateurs() {
        if( this.item.documentManagementUtilisateurs == null )
            this.item.documentManagementUtilisateurs = new Array<DocumentManagementUtilisateurDto>();
       this.validateDocumentManagementUtilisateurs();
       if (this.errorMessages.length === 0) {
              this.item.documentManagementUtilisateurs.push({... this.documentManagementUtilisateursElement});
              this.documentManagementUtilisateursElement = new DocumentManagementUtilisateurDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletedocumentManagementUtilisateurs(p: DocumentManagementUtilisateurDto) {
        this.item.documentManagementUtilisateurs.forEach((element, index) => {
            if (element === p) { this.item.documentManagementUtilisateurs.splice(index, 1); }
        });
    }

    public editdocumentManagementUtilisateurs(p: DocumentManagementUtilisateurDto) {
        this.documentManagementUtilisateursElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDocumentReference();
    }

    public validateDocumentReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validDocumentReference = false;
        } else {
            this.validDocumentReference = true;
        }
    }


    public async openCreateDocumentType(documentType: string) {
    const isPermistted = await this.roleService.isPermitted('DocumentType', 'add');
    if(isPermistted) {
         this.documentType = new DocumentTypeDto();
         this.createDocumentTypeDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateTag(tag: string) {
    const isPermistted = await this.roleService.isPermitted('Tag', 'add');
    if(isPermistted) {
         this.tag = new TagDto();
         this.createTagDialog = true;
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
    get entiteAdministrative(): EntiteAdministrativeDto {
        return this.entiteAdministrativeService.item;
    }
    set entiteAdministrative(value: EntiteAdministrativeDto) {
        this.entiteAdministrativeService.item = value;
    }
    get entiteAdministratives(): Array<EntiteAdministrativeDto> {
        return this.entiteAdministrativeService.items;
    }
    set entiteAdministratives(value: Array<EntiteAdministrativeDto>) {
        this.entiteAdministrativeService.items = value;
    }
    get createEntiteAdministrativeDialog(): boolean {
       return this.entiteAdministrativeService.createDialog;
    }
    set createEntiteAdministrativeDialog(value: boolean) {
        this.entiteAdministrativeService.createDialog= value;
    }
    get groupe(): GroupeDto {
        return this.groupeService.item;
    }
    set groupe(value: GroupeDto) {
        this.groupeService.item = value;
    }
    get groupes(): Array<GroupeDto> {
        return this.groupeService.items;
    }
    set groupes(value: Array<GroupeDto>) {
        this.groupeService.items = value;
    }
    get createGroupeDialog(): boolean {
       return this.groupeService.createDialog;
    }
    set createGroupeDialog(value: boolean) {
        this.groupeService.createDialog= value;
    }
    get documentType(): DocumentTypeDto {
        return this.documentTypeService.item;
    }
    set documentType(value: DocumentTypeDto) {
        this.documentTypeService.item = value;
    }
    get documentTypes(): Array<DocumentTypeDto> {
        return this.documentTypeService.items;
    }
    set documentTypes(value: Array<DocumentTypeDto>) {
        this.documentTypeService.items = value;
    }
    get createDocumentTypeDialog(): boolean {
       return this.documentTypeService.createDialog;
    }
    set createDocumentTypeDialog(value: boolean) {
        this.documentTypeService.createDialog= value;
    }
    get tag(): TagDto {
        return this.tagService.item;
    }
    set tag(value: TagDto) {
        this.tagService.item = value;
    }
    get tags(): Array<TagDto> {
        return this.tagService.items;
    }
    set tags(value: Array<TagDto>) {
        this.tagService.items = value;
    }
    get createTagDialog(): boolean {
       return this.tagService.createDialog;
    }
    set createTagDialog(value: boolean) {
        this.tagService.createDialog= value;
    }
    get acessManagement(): AcessManagementDto {
        return this.acessManagementService.item;
    }
    set acessManagement(value: AcessManagementDto) {
        this.acessManagementService.item = value;
    }
    get acessManagements(): Array<AcessManagementDto> {
        return this.acessManagementService.items;
    }
    set acessManagements(value: Array<AcessManagementDto>) {
        this.acessManagementService.items = value;
    }
    get createAcessManagementDialog(): boolean {
       return this.acessManagementService.createDialog;
    }
    set createAcessManagementDialog(value: boolean) {
        this.acessManagementService.createDialog= value;
    }
    get acessShare(): AcessShareDto {
        return this.acessShareService.item;
    }
    set acessShare(value: AcessShareDto) {
        this.acessShareService.item = value;
    }
    get acessShares(): Array<AcessShareDto> {
        return this.acessShareService.items;
    }
    set acessShares(value: Array<AcessShareDto>) {
        this.acessShareService.items = value;
    }
    get createAcessShareDialog(): boolean {
       return this.acessShareService.createDialog;
    }
    set createAcessShareDialog(value: boolean) {
        this.acessShareService.createDialog= value;
    }

    get documentAcessShares(): Array<DocumentAcessShareDto> {
        if( this._documentAcessShares == null )
            this._documentAcessShares = new Array();
        return this._documentAcessShares;
    }

    set documentAcessShares(value: Array<DocumentAcessShareDto>) {
        this._documentAcessShares = value;
    }
    get documentTags(): Array<DocumentTagDto> {
        if( this._documentTags == null )
            this._documentTags = new Array();
        return this._documentTags;
    }

    set documentTags(value: Array<DocumentTagDto>) {
        this._documentTags = value;
    }


    get validDocumentReference(): boolean {
        return this._validDocumentReference;
    }

    set validDocumentReference(value: boolean) {
         this._validDocumentReference = value;
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

    get documentPartageGroupesElement(): DocumentPartageGroupeDto {
        if( this._documentPartageGroupesElement == null )
            this._documentPartageGroupesElement = new DocumentPartageGroupeDto();
        return this._documentPartageGroupesElement;
    }

    set documentPartageGroupesElement(value: DocumentPartageGroupeDto) {
        this._documentPartageGroupesElement = value;
    }
    get documentPartageUtilisateursElement(): DocumentPartageUtilisateurDto {
        if( this._documentPartageUtilisateursElement == null )
            this._documentPartageUtilisateursElement = new DocumentPartageUtilisateurDto();
        return this._documentPartageUtilisateursElement;
    }

    set documentPartageUtilisateursElement(value: DocumentPartageUtilisateurDto) {
        this._documentPartageUtilisateursElement = value;
    }
    get documentManagementGroupesElement(): DocumentManagementGroupeDto {
        if( this._documentManagementGroupesElement == null )
            this._documentManagementGroupesElement = new DocumentManagementGroupeDto();
        return this._documentManagementGroupesElement;
    }

    set documentManagementGroupesElement(value: DocumentManagementGroupeDto) {
        this._documentManagementGroupesElement = value;
    }
    get documentManagementUtilisateursElement(): DocumentManagementUtilisateurDto {
        if( this._documentManagementUtilisateursElement == null )
            this._documentManagementUtilisateursElement = new DocumentManagementUtilisateurDto();
        return this._documentManagementUtilisateursElement;
    }

    set documentManagementUtilisateursElement(value: DocumentManagementUtilisateurDto) {
        this._documentManagementUtilisateursElement = value;
    }
    get documentAcessSharesElement(): DocumentAcessShareDto {
        if( this._documentAcessSharesElement == null )
            this._documentAcessSharesElement = new DocumentAcessShareDto();
        return this._documentAcessSharesElement;
    }

    set documentAcessSharesElement(value: DocumentAcessShareDto) {
        this._documentAcessSharesElement = value;
    }
    get documentTagsElement(): DocumentTagDto {
        if( this._documentTagsElement == null )
            this._documentTagsElement = new DocumentTagDto();
        return this._documentTagsElement;
    }

    set documentTagsElement(value: DocumentTagDto) {
        this._documentTagsElement = value;
    }

}
