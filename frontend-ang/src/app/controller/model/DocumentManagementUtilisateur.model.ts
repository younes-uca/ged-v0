import {AcessManagementDto} from './AcessManagement.model';
import {DocumentDto} from './Document.model';
import {UtilisateurDto} from './Utilisateur.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DocumentManagementUtilisateurDto  extends BaseDto{

    public id: number;
   public dateManagement: Date;
    public dateManagementMax: string ;
    public dateManagementMin: string ;
    public document: DocumentDto ;
    public utilisateur: UtilisateurDto ;
    public acessManagement: AcessManagementDto ;

}
