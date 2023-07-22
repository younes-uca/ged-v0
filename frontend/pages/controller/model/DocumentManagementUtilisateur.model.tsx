import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {AcessManagementDto} from 'pages/controller/model/AcessManagement.model';
import {DocumentDto} from 'pages/controller/model/Document.model';
import {UtilisateurDto} from 'pages/controller/model/Utilisateur.model';

export class DocumentManagementUtilisateurDto extends BaseDto{


    public id: number;
   public dateManagement: Date;
    public dateManagementMax: string ;
    public dateManagementMin: string ;
    public document: DocumentDto ;
    public utilisateur: UtilisateurDto ;
    public acessManagement: AcessManagementDto ;

}
