import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {GroupeUtilisateurDto} from 'pages/controller/model/GroupeUtilisateur.model';
import {UtilisateurDto} from 'pages/controller/model/Utilisateur.model';

export class GroupeDto extends BaseDto{


    public id: number;
    public code: string;
    public libelle: string;
    public utilisateur: UtilisateurDto ;
     public groupeUtilisateurs: Array<GroupeUtilisateurDto>;

}
