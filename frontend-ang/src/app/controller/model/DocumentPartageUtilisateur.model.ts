import {AcessShareDto} from './AcessShare.model';
import {DocumentDto} from './Document.model';
import {UtilisateurDto} from './Utilisateur.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DocumentPartageUtilisateurDto  extends BaseDto{

    public id: number;
   public dateShare: Date;
    public dateShareMax: string ;
    public dateShareMin: string ;
    public document: DocumentDto ;
    public utilisateur: UtilisateurDto ;
    public acessShare: AcessShareDto ;

}
