import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {AcessShareDto} from 'pages/controller/model/AcessShare.model';
import {DocumentDto} from 'pages/controller/model/Document.model';

export class DocumentAcessShareDto extends BaseDto{


    public id: number;
    public document: DocumentDto ;
    public acessShare: AcessShareDto ;

}
