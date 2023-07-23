import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {GroupeDto} from 'pages/controller/model/Groupe.model';
import {UtilisateurDto} from 'pages/controller/model/Utilisateur.model';

export class GroupeUtilisateurDto extends BaseDto{


    public id: number;
    public groupe: GroupeDto ;
    public utilisateur: UtilisateurDto ;

}
