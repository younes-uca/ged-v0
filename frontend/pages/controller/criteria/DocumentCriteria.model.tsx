import {BaseCriteria} from '/pages/zynerator/criteria/BaseCriteria.model';

import {DocumentPartageGroupeCriteria} from 'DocumentPartageGroupeCriteria.model';
import {DocumentTagCriteria} from 'DocumentTagCriteria.model';
import {DocumentPartageUtilisateurCriteria} from 'DocumentPartageUtilisateurCriteria.model';
import {DocumentTypeCriteria} from 'DocumentTypeCriteria.model';
import {EntiteAdministrativeCriteria} from 'EntiteAdministrativeCriteria.model';
import {DocumentManagementGroupeCriteria} from 'DocumentManagementGroupeCriteria.model';
import {DocumentAcessShareCriteria} from 'DocumentAcessShareCriteria.model';
import {UtilisateurCriteria} from 'UtilisateurCriteria.model';
import {DocumentManagementUtilisateurCriteria} from 'DocumentManagementUtilisateurCriteria.model';




export class DocumentCriteria  extends  BaseCriteria {


    public id: number;

    public reference: string;
    public referenceLike: string;
    public uploadDate: Date;
    public uploadDateFrom: Date;
    public uploadDateTo: Date;
    public dateLastUpdate: Date;
    public dateLastUpdateFrom: Date;
    public dateLastUpdateTo: Date;
    public content: string;
    public contentLike: string;
     public size: number;
     public sizeMin: number;
     public sizeMax: number;
    public description: string;
    public descriptionLike: string;
    public archive: null | boolean;
    public versionne: null | boolean;
  public documentType: DocumentTypeCriteria ;
  public documentTypes: Array<DocumentTypeCriteria> ;
  public utilisateur: UtilisateurCriteria ;
  public utilisateurs: Array<UtilisateurCriteria> ;
  public entiteAdministrative: EntiteAdministrativeCriteria ;
  public entiteAdministratives: Array<EntiteAdministrativeCriteria> ;
      public documentPartageGroupes: Array<DocumentPartageGroupeCriteria>;
      public documentPartageUtilisateurs: Array<DocumentPartageUtilisateurCriteria>;
      public documentManagementGroupes: Array<DocumentManagementGroupeCriteria>;
      public documentManagementUtilisateurs: Array<DocumentManagementUtilisateurCriteria>;
      public documentAcessShares: Array<DocumentAcessShareCriteria>;
      public documentTags: Array<DocumentTagCriteria>;


}
