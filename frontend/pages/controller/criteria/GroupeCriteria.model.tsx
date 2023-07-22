import {BaseCriteria} from '/pages/zynerator/criteria/BaseCriteria.model';

import {GroupeUtilisateurCriteria} from 'GroupeUtilisateurCriteria.model';
import {UtilisateurCriteria} from 'UtilisateurCriteria.model';




export class GroupeCriteria  extends  BaseCriteria {


    public id: number;

    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
  public utilisateur: UtilisateurCriteria ;
  public utilisateurs: Array<UtilisateurCriteria> ;
      public groupeUtilisateurs: Array<GroupeUtilisateurCriteria>;


}
