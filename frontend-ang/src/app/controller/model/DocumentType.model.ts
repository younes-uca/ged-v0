import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DocumentTypeDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;

}
