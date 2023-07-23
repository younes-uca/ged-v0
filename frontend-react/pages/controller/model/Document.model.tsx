import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {DocumentPartageGroupeDto} from 'pages/controller/model/DocumentPartageGroupe.model';
import {DocumentTagDto} from 'pages/controller/model/DocumentTag.model';
import {DocumentPartageUtilisateurDto} from 'pages/controller/model/DocumentPartageUtilisateur.model';
import {DocumentTypeDto} from 'pages/controller/model/DocumentType.model';
import {EntiteAdministrativeDto} from 'pages/controller/model/EntiteAdministrative.model';
import {DocumentManagementGroupeDto} from 'pages/controller/model/DocumentManagementGroupe.model';
import {DocumentAcessShareDto} from 'pages/controller/model/DocumentAcessShare.model';
import {UtilisateurDto} from 'pages/controller/model/Utilisateur.model';
import {DocumentManagementUtilisateurDto} from 'pages/controller/model/DocumentManagementUtilisateur.model';

export class DocumentDto extends BaseDto{


    public id: number;
    public reference: string;
   public uploadDate: Date;
   public dateLastUpdate: Date;
    public content: string;
    public size: number;
    public description: string;
   public archive: null | boolean;
   public versionne: null | boolean;
    public uploadDateMax: string ;
    public uploadDateMin: string ;
    public dateLastUpdateMax: string ;
    public dateLastUpdateMin: string ;
    public sizeMax: string ;
    public sizeMin: string ;
    public documentType: DocumentTypeDto ;
    public utilisateur: UtilisateurDto ;
    public entiteAdministrative: EntiteAdministrativeDto ;
     public documentPartageGroupes: Array<DocumentPartageGroupeDto>;
     public documentPartageUtilisateurs: Array<DocumentPartageUtilisateurDto>;
     public documentManagementGroupes: Array<DocumentManagementGroupeDto>;
     public documentManagementUtilisateurs: Array<DocumentManagementUtilisateurDto>;
     public documentAcessShares: Array<DocumentAcessShareDto>;
     public documentTags: Array<DocumentTagDto>;

}
