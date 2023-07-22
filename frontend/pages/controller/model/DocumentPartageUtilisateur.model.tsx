import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {AcessShareDto} from 'pages/controller/model/AcessShare.model';
import {DocumentDto} from 'pages/controller/model/Document.model';
import {UtilisateurDto} from 'pages/controller/model/Utilisateur.model';

export class DocumentPartageUtilisateurDto extends BaseDto{


    public id: number;
   public dateShare: Date;
    public dateShareMax: string ;
    public dateShareMin: string ;
    public document: DocumentDto ;
    public utilisateur: UtilisateurDto ;
    public acessShare: AcessShareDto ;

}
