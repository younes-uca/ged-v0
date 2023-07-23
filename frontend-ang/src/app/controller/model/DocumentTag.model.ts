import {TagDto} from './Tag.model';
import {DocumentDto} from './Document.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DocumentTagDto  extends BaseDto{

    public id: number;
    public document: DocumentDto ;
    public tag: TagDto ;

}
