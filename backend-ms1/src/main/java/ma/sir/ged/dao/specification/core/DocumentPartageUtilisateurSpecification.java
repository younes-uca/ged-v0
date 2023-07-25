package  ma.sir.ged.dao.specification.core;

import ma.sir.ged.zynerator.specification.AbstractSpecification;
import ma.sir.ged.dao.criteria.core.DocumentPartageUtilisateurCriteria;
import ma.sir.ged.bean.core.DocumentPartageUtilisateur;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class DocumentPartageUtilisateurSpecification extends  AbstractSpecification<DocumentPartageUtilisateurCriteria, DocumentPartageUtilisateur>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("dateShare", criteria.getDateShare(), criteria.getDateShareFrom(), criteria.getDateShareTo());
        addPredicateFk("document","id", criteria.getDocument()==null?null:criteria.getDocument().getId());
        addPredicateFk("document","id", criteria.getDocuments());
        addPredicateFk("document","reference", criteria.getDocument()==null?null:criteria.getDocument().getReference());
        addPredicateFk("utilisateur","id", criteria.getUtilisateur()==null?null:criteria.getUtilisateur().getId());
        addPredicateFk("utilisateur","id", criteria.getUtilisateurs());
        addPredicateFk("utilisateur","email", criteria.getUtilisateur()==null?null:criteria.getUtilisateur().getEmail());
        addPredicateFk("acessShare","id", criteria.getAcessShare()==null?null:criteria.getAcessShare().getId());
        addPredicateFk("acessShare","id", criteria.getAcessShares());
        addPredicateFk("acessShare","code", criteria.getAcessShare()==null?null:criteria.getAcessShare().getCode());
    }

    public DocumentPartageUtilisateurSpecification(DocumentPartageUtilisateurCriteria criteria) {
        super(criteria);
    }

    public DocumentPartageUtilisateurSpecification(DocumentPartageUtilisateurCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
