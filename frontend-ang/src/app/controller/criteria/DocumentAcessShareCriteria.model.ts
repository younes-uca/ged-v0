import {AcessShareCriteria} from './AcessShareCriteria.model';
import {DocumentCriteria} from './DocumentCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class DocumentAcessShareCriteria  extends   BaseCriteria  {

    public id: number;
  public document: DocumentCriteria ;
  public documents: Array<DocumentCriteria> ;
  public acessShare: AcessShareCriteria ;
  public acessShares: Array<AcessShareCriteria> ;

}
