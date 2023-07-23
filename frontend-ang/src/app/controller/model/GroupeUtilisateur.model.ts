import {GroupeDto} from './Groupe.model';
import {UtilisateurDto} from './Utilisateur.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class GroupeUtilisateurDto  extends BaseDto{

    public id: number;
    public groupe: GroupeDto ;
    public utilisateur: UtilisateurDto ;

}
