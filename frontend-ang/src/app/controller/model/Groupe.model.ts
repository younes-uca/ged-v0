import {GroupeUtilisateurDto} from './GroupeUtilisateur.model';
import {UtilisateurDto} from './Utilisateur.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class GroupeDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
    public utilisateur: UtilisateurDto ;
     public groupeUtilisateurs: Array<GroupeUtilisateurDto>;

}
