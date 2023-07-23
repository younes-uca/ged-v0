import {AcessShareCriteria} from './AcessShareCriteria.model';
import {DocumentCriteria} from './DocumentCriteria.model';
import {UtilisateurCriteria} from './UtilisateurCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class DocumentPartageUtilisateurCriteria  extends   BaseCriteria  {

    public id: number;
    public dateShare: Date;
    public dateShareFrom: Date;
    public dateShareTo: Date;
  public document: DocumentCriteria ;
  public documents: Array<DocumentCriteria> ;
  public utilisateur: UtilisateurCriteria ;
  public utilisateurs: Array<UtilisateurCriteria> ;
  public acessShare: AcessShareCriteria ;
  public acessShares: Array<AcessShareCriteria> ;

}
