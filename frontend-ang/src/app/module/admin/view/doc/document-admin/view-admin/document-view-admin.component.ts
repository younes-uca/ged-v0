import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-document-view-admin',
  templateUrl: './document-view-admin.component.html'
})
export class DocumentViewAdminComponent extends AbstractViewController<DocumentDto, DocumentCriteria, DocumentService> implements OnInit {

    documentPartageGroupes = new DocumentPartageGroupeDto();
    documentPartageGroupess: Array<DocumentPartageGroupeDto> = [];
    documentPartageUtilisateurs = new DocumentPartageUtilisateurDto();
    documentPartageUtilisateurss: Array<DocumentPartageUtilisateurDto> = [];
    documentManagementGroupes = new DocumentManagementGroupeDto();
    documentManagementGroupess: Array<DocumentManagementGroupeDto> = [];
    documentManagementUtilisateurs = new DocumentManagementUtilisateurDto();
    documentManagementUtilisateurss: Array<DocumentManagementUtilisateurDto> = [];
    documentAcessShares = new DocumentAcessShareDto();
    documentAcessSharess: Array<DocumentAcessShareDto> = [];
    documentTags = new DocumentTagDto();
    documentTagss: Array<DocumentTagDto> = [];

    constructor(private documentService: DocumentService, private groupeService: GroupeService, private documentTypeService: DocumentTypeService, private tagService: TagService, private entiteAdministrativeService: EntiteAdministrativeService, private acessManagementService: AcessManagementService, private documentTagService: DocumentTagService, private utilisateurService: UtilisateurService, private documentManagementGroupeService: DocumentManagementGroupeService, private acessShareService: AcessShareService, private documentPartageUtilisateurService: DocumentPartageUtilisateurService, private documentManagementUtilisateurService: DocumentManagementUtilisateurService, private documentPartageGroupeService: DocumentPartageGroupeService, private documentAcessShareService: DocumentAcessShareService){
        super(documentService);
    }

    ngOnInit(): void {
        this.documentPartageGroupes.groupe = new GroupeDto();
        this.groupeService.findAll().subscribe((data) => this.groupes = data);
        this.documentPartageGroupes.acessShare = new AcessShareDto();
        this.acessShareService.findAll().subscribe((data) => this.acessShares = data);
        this.documentPartageUtilisateurs.utilisateur = new UtilisateurDto();
        this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
        this.documentPartageUtilisateurs.acessShare = new AcessShareDto();
        this.acessShareService.findAll().subscribe((data) => this.acessShares = data);
        this.documentManagementGroupes.groupe = new GroupeDto();
        this.groupeService.findAll().subscribe((data) => this.groupes = data);
        this.documentManagementGroupes.acessManagement = new AcessManagementDto();
        this.acessManagementService.findAll().subscribe((data) => this.acessManagements = data);
        this.documentManagementUtilisateurs.utilisateur = new UtilisateurDto();
        this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
        this.documentManagementUtilisateurs.acessManagement = new AcessManagementDto();
        this.acessManagementService.findAll().subscribe((data) => this.acessManagements = data);
        this.documentAcessShares.acessShare = new AcessShareDto();
        this.acessShareService.findAll().subscribe((data) => this.acessShares = data);
        this.documentTags.tag = new TagDto();
        this.tagService.findAll().subscribe((data) => this.tags = data);
        this.documentType = new DocumentTypeDto();
        this.documentTypeService.findAll().subscribe((data) => this.documentTypes = data);
        this.utilisateur = new UtilisateurDto();
        this.utilisateurService.findAll().subscribe((data) => this.utilisateurs = data);
        this.entiteAdministrative = new EntiteAdministrativeDto();
        this.entiteAdministrativeService.findAll().subscribe((data) => this.entiteAdministratives = data);
    }


    get utilisateur(): UtilisateurDto {
       return this.utilisateurService.item;
    }
    set utilisateur(value: UtilisateurDto) {
        this.utilisateurService.item = value;
    }
    get utilisateurs():Array<UtilisateurDto> {
       return this.utilisateurService.items;
    }
    set utilisateurs(value: Array<UtilisateurDto>) {
        this.utilisateurService.items = value;
    }
    get entiteAdministrative(): EntiteAdministrativeDto {
       return this.entiteAdministrativeService.item;
    }
    set entiteAdministrative(value: EntiteAdministrativeDto) {
        this.entiteAdministrativeService.item = value;
    }
    get entiteAdministratives():Array<EntiteAdministrativeDto> {
       return this.entiteAdministrativeService.items;
    }
    set entiteAdministratives(value: Array<EntiteAdministrativeDto>) {
        this.entiteAdministrativeService.items = value;
    }
    get groupe(): GroupeDto {
       return this.groupeService.item;
    }
    set groupe(value: GroupeDto) {
        this.groupeService.item = value;
    }
    get groupes():Array<GroupeDto> {
       return this.groupeService.items;
    }
    set groupes(value: Array<GroupeDto>) {
        this.groupeService.items = value;
    }
    get documentType(): DocumentTypeDto {
       return this.documentTypeService.item;
    }
    set documentType(value: DocumentTypeDto) {
        this.documentTypeService.item = value;
    }
    get documentTypes():Array<DocumentTypeDto> {
       return this.documentTypeService.items;
    }
    set documentTypes(value: Array<DocumentTypeDto>) {
        this.documentTypeService.items = value;
    }
    get tag(): TagDto {
       return this.tagService.item;
    }
    set tag(value: TagDto) {
        this.tagService.item = value;
    }
    get tags():Array<TagDto> {
       return this.tagService.items;
    }
    set tags(value: Array<TagDto>) {
        this.tagService.items = value;
    }
    get acessManagement(): AcessManagementDto {
       return this.acessManagementService.item;
    }
    set acessManagement(value: AcessManagementDto) {
        this.acessManagementService.item = value;
    }
    get acessManagements():Array<AcessManagementDto> {
       return this.acessManagementService.items;
    }
    set acessManagements(value: Array<AcessManagementDto>) {
        this.acessManagementService.items = value;
    }
    get acessShare(): AcessShareDto {
       return this.acessShareService.item;
    }
    set acessShare(value: AcessShareDto) {
        this.acessShareService.item = value;
    }
    get acessShares():Array<AcessShareDto> {
       return this.acessShareService.items;
    }
    set acessShares(value: Array<AcessShareDto>) {
        this.acessShareService.items = value;
    }


}
