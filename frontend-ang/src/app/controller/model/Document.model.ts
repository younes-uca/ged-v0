import {DocumentPartageGroupeDto} from './DocumentPartageGroupe.model';
import {DocumentTagDto} from './DocumentTag.model';
import {DocumentPartageUtilisateurDto} from './DocumentPartageUtilisateur.model';
import {DocumentTypeDto} from './DocumentType.model';
import {EntiteAdministrativeDto} from './EntiteAdministrative.model';
import {DocumentManagementGroupeDto} from './DocumentManagementGroupe.model';
import {DocumentAcessShareDto} from './DocumentAcessShare.model';
import {UtilisateurDto} from './Utilisateur.model';
import {DocumentManagementUtilisateurDto} from './DocumentManagementUtilisateur.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DocumentDto  extends BaseDto{

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
