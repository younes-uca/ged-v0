import {BaseCriteria} from '/pages/zynerator/criteria/BaseCriteria.model';

import {AcessShareCriteria} from 'AcessShareCriteria.model';
import {DocumentCriteria} from 'DocumentCriteria.model';




export class DocumentAcessShareCriteria  extends  BaseCriteria {


    public id: number;

  public document: DocumentCriteria ;
  public documents: Array<DocumentCriteria> ;
  public acessShare: AcessShareCriteria ;
  public acessShares: Array<AcessShareCriteria> ;


}
