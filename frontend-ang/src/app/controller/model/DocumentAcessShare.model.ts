import {AcessShareDto} from './AcessShare.model';
import {DocumentDto} from './Document.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DocumentAcessShareDto  extends BaseDto{

    public id: number;
    public document: DocumentDto ;
    public acessShare: AcessShareDto ;

}
