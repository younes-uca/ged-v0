import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class UtilisateurCriteria  extends   BaseCriteria  {

    public id: number;
    public email: string;
    public emailLike: string;
    public name: string;
    public nameLike: string;

}
