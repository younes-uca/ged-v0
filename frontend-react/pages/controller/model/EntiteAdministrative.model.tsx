import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {UtilisateurDto} from 'pages/controller/model/Utilisateur.model';

export class EntiteAdministrativeDto extends BaseDto{


    public id: number;
    public code: string;
    public libelle: string;
    public utilisateur: UtilisateurDto ;

}
