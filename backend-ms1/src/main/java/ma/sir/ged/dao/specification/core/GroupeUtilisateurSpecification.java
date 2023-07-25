package  ma.sir.ged.dao.specification.core;

import ma.sir.ged.zynerator.specification.AbstractSpecification;
import ma.sir.ged.dao.criteria.core.GroupeUtilisateurCriteria;
import ma.sir.ged.bean.core.GroupeUtilisateur;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class GroupeUtilisateurSpecification extends  AbstractSpecification<GroupeUtilisateurCriteria, GroupeUtilisateur>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateFk("groupe","id", criteria.getGroupe()==null?null:criteria.getGroupe().getId());
        addPredicateFk("groupe","id", criteria.getGroupes());
        addPredicateFk("groupe","code", criteria.getGroupe()==null?null:criteria.getGroupe().getCode());
        addPredicateFk("utilisateur","id", criteria.getUtilisateur()==null?null:criteria.getUtilisateur().getId());
        addPredicateFk("utilisateur","id", criteria.getUtilisateurs());
        addPredicateFk("utilisateur","email", criteria.getUtilisateur()==null?null:criteria.getUtilisateur().getEmail());
    }

    public GroupeUtilisateurSpecification(GroupeUtilisateurCriteria criteria) {
        super(criteria);
    }

    public GroupeUtilisateurSpecification(GroupeUtilisateurCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
