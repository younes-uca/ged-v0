import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {GroupeDto} from 'pages/controller/model/Groupe.model';
import {AcessManagementDto} from 'pages/controller/model/AcessManagement.model';
import {DocumentDto} from 'pages/controller/model/Document.model';

export class DocumentManagementGroupeDto extends BaseDto{


    public id: number;
   public dateManagement: Date;
    public dateManagementMax: string ;
    public dateManagementMin: string ;
    public document: DocumentDto ;
    public groupe: GroupeDto ;
    public acessManagement: AcessManagementDto ;

}
