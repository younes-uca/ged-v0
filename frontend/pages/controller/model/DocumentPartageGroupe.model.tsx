import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {AcessShareDto} from 'pages/controller/model/AcessShare.model';
import {GroupeDto} from 'pages/controller/model/Groupe.model';
import {DocumentDto} from 'pages/controller/model/Document.model';

export class DocumentPartageGroupeDto extends BaseDto{


    public id: number;
   public dateShare: Date;
    public dateShareMax: string ;
    public dateShareMin: string ;
    public document: DocumentDto ;
    public groupe: GroupeDto ;
    public acessShare: AcessShareDto ;

}
