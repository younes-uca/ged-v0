import {AcessManagementCriteria} from './AcessManagementCriteria.model';
import {DocumentCriteria} from './DocumentCriteria.model';
import {UtilisateurCriteria} from './UtilisateurCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class DocumentManagementUtilisateurCriteria  extends   BaseCriteria  {

    public id: number;
    public dateManagement: Date;
    public dateManagementFrom: Date;
    public dateManagementTo: Date;
  public document: DocumentCriteria ;
  public documents: Array<DocumentCriteria> ;
  public utilisateur: UtilisateurCriteria ;
  public utilisateurs: Array<UtilisateurCriteria> ;
  public acessManagement: AcessManagementCriteria ;
  public acessManagements: Array<AcessManagementCriteria> ;

}
