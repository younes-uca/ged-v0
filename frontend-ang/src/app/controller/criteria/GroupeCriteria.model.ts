import {GroupeUtilisateurCriteria} from './GroupeUtilisateurCriteria.model';
import {UtilisateurCriteria} from './UtilisateurCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class GroupeCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
  public utilisateur: UtilisateurCriteria ;
  public utilisateurs: Array<UtilisateurCriteria> ;
      public groupeUtilisateurs: Array<GroupeUtilisateurCriteria>;

}
