import {GroupeCriteria} from './GroupeCriteria.model';
import {UtilisateurCriteria} from './UtilisateurCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class GroupeUtilisateurCriteria  extends   BaseCriteria  {

    public id: number;
  public groupe: GroupeCriteria ;
  public groupes: Array<GroupeCriteria> ;
  public utilisateur: UtilisateurCriteria ;
  public utilisateurs: Array<UtilisateurCriteria> ;

}
