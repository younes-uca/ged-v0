import {AcessShareDto} from './AcessShare.model';
import {GroupeDto} from './Groupe.model';
import {DocumentDto} from './Document.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DocumentPartageGroupeDto  extends BaseDto{

    public id: number;
   public dateShare: Date;
    public dateShareMax: string ;
    public dateShareMin: string ;
    public document: DocumentDto ;
    public groupe: GroupeDto ;
    public acessShare: AcessShareDto ;

}
