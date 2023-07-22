import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {TagDto} from 'pages/controller/model/Tag.model';
import {DocumentDto} from 'pages/controller/model/Document.model';

export class DocumentTagDto extends BaseDto{


    public id: number;
    public document: DocumentDto ;
    public tag: TagDto ;

}
