import {UtilisateurDto} from './Utilisateur.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EntiteAdministrativeDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
    public utilisateur: UtilisateurDto ;

}
