import {BaseCriteria} from '/pages/zynerator/criteria/BaseCriteria.model';

import {GroupeCriteria} from 'GroupeCriteria.model';
import {AcessManagementCriteria} from 'AcessManagementCriteria.model';
import {DocumentCriteria} from 'DocumentCriteria.model';




export class DocumentManagementGroupeCriteria  extends  BaseCriteria {


    public id: number;

    public dateManagement: Date;
    public dateManagementFrom: Date;
    public dateManagementTo: Date;
  public document: DocumentCriteria ;
  public documents: Array<DocumentCriteria> ;
  public groupe: GroupeCriteria ;
  public groupes: Array<GroupeCriteria> ;
  public acessManagement: AcessManagementCriteria ;
  public acessManagements: Array<AcessManagementCriteria> ;


}
