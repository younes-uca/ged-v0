import {GroupeDto} from './Groupe.model';
import {AcessManagementDto} from './AcessManagement.model';
import {DocumentDto} from './Document.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DocumentManagementGroupeDto  extends BaseDto{

    public id: number;
   public dateManagement: Date;
    public dateManagementMax: string ;
    public dateManagementMin: string ;
    public document: DocumentDto ;
    public groupe: GroupeDto ;
    public acessManagement: AcessManagementDto ;

}
