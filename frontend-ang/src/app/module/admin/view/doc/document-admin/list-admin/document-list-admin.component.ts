import {Component, OnInit} from '@angular/core';
import {DocumentService} from 'src/app/controller/service/Document.service';
import {DocumentDto} from 'src/app/controller/model/Document.model';
import {DocumentCriteria} from 'src/app/controller/criteria/DocumentCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-document-list-admin',
  templateUrl: './document-list-admin.component.html'
})
export class DocumentListAdminComponent extends AbstractListController<DocumentDto, DocumentCriteria, DocumentService>  implements OnInit {

    fileName = 'Document';

     yesOrNoArchive :any[] =[];
     yesOrNoVersionne :any[] =[];
    documentTypes :Array<DocumentTypeDto>;
    utilisateurs :Array<UtilisateurDto>;
    entiteAdministratives :Array<EntiteAdministrativeDto>;

constructor( private documentService: DocumentService , private groupeService: GroupeService, private documentTypeService: DocumentTypeService, private tagService: TagService, private entiteAdministrativeService: EntiteAdministrativeService, private acessManagementService: AcessManagementService, private documentTagService: DocumentTagService, private utilisateurService: UtilisateurService, private documentManagementGroupeService: DocumentManagementGroupeService, private acessShareService: AcessShareService, private documentPartageUtilisateurService: DocumentPartageUtilisateurService, private documentManagementUtilisateurService: DocumentManagementUtilisateurService, private documentPartageGroupeService: DocumentPartageGroupeService, private documentAcessShareService: DocumentAcessShareService) {
        super(documentService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadDocumentType();
      this.loadUtilisateur();
      this.loadEntiteAdministrative();
    this.yesOrNoArchive =  [{label: 'Archive', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoVersionne =  [{label: 'Versionne', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadDocuments(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Document', 'list');
        isPermistted ? this.service.findAll().subscribe(documents => this.items = documents,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'uploadDate', header: 'Upload date'},
            {field: 'dateLastUpdate', header: 'Date last update'},
            {field: 'content', header: 'Content'},
            {field: 'size', header: 'Size'},
            {field: 'documentType?.libelle', header: 'Document type'},
            {field: 'utilisateur?.name', header: 'Utilisateur'},
            {field: 'archive', header: 'Archive'},
            {field: 'versionne', header: 'Versionne'},
            {field: 'entiteAdministrative?.libelle', header: 'Entite administrative'},
        ];
    }


    public async loadDocumentType(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Document', 'list');
        isPermistted ? this.documentTypeService.findAllOptimized().subscribe(documentTypes => this.documentTypes = documentTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadUtilisateur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Document', 'list');
        isPermistted ? this.utilisateurService.findAllOptimized().subscribe(utilisateurs => this.utilisateurs = utilisateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEntiteAdministrative(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Document', 'list');
        isPermistted ? this.entiteAdministrativeService.findAllOptimized().subscribe(entiteAdministratives => this.entiteAdministratives = entiteAdministratives,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: DocumentDto) {
        if (res.documentPartageGroupes != null) {
             res.documentPartageGroupes.forEach(d => { d.document = null; d.id = null; });
        }
        if (res.documentPartageUtilisateurs != null) {
             res.documentPartageUtilisateurs.forEach(d => { d.document = null; d.id = null; });
        }
        if (res.documentManagementGroupes != null) {
             res.documentManagementGroupes.forEach(d => { d.document = null; d.id = null; });
        }
        if (res.documentManagementUtilisateurs != null) {
             res.documentManagementUtilisateurs.forEach(d => { d.document = null; d.id = null; });
        }
        if (res.documentAcessShares != null) {
             res.documentAcessShares.forEach(d => { d.document = null; d.id = null; });
        }
        if (res.documentTags != null) {
             res.documentTags.forEach(d => { d.document = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Upload date': this.datePipe.transform(e.uploadDate , 'dd/MM/yyyy hh:mm'),
                'Date last update': this.datePipe.transform(e.dateLastUpdate , 'dd/MM/yyyy hh:mm'),
                 'Content': e.content ,
                 'Size': e.size ,
                'Document type': e.documentType?.libelle ,
                 'Description': e.description ,
                'Utilisateur': e.utilisateur?.name ,
                'Archive': e.archive? 'Vrai' : 'Faux' ,
                'Versionne': e.versionne? 'Vrai' : 'Faux' ,
                'Entite administrative': e.entiteAdministrative?.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Upload date Min': this.criteria.uploadDateFrom ? this.datePipe.transform(this.criteria.uploadDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Upload date Max': this.criteria.uploadDateTo ? this.datePipe.transform(this.criteria.uploadDateTo , this.dateFormat) : environment.emptyForExport ,
            'Date last update Min': this.criteria.dateLastUpdateFrom ? this.datePipe.transform(this.criteria.dateLastUpdateFrom , this.dateFormat) : environment.emptyForExport ,
            'Date last update Max': this.criteria.dateLastUpdateTo ? this.datePipe.transform(this.criteria.dateLastUpdateTo , this.dateFormat) : environment.emptyForExport ,
            'Content': this.criteria.content ? this.criteria.content : environment.emptyForExport ,
            'Size Min': this.criteria.sizeMin ? this.criteria.sizeMin : environment.emptyForExport ,
            'Size Max': this.criteria.sizeMax ? this.criteria.sizeMax : environment.emptyForExport ,
        //'Document type': this.criteria.documentType?.libelle ? this.criteria.documentType?.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Utilisateur': this.criteria.utilisateur?.name ? this.criteria.utilisateur?.name : environment.emptyForExport ,
            'Archive': this.criteria.archive ? (this.criteria.archive ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Versionne': this.criteria.versionne ? (this.criteria.versionne ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        //'Entite administrative': this.criteria.entiteAdministrative?.libelle ? this.criteria.entiteAdministrative?.libelle : environment.emptyForExport ,
        }];
      }
}
