package  ma.sir.ged.dao.specification.core;

import ma.sir.ged.zynerator.specification.AbstractSpecification;
import ma.sir.ged.dao.criteria.core.AcessManagementCriteria;
import ma.sir.ged.bean.core.AcessManagement;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class AcessManagementSpecification extends  AbstractSpecification<AcessManagementCriteria, AcessManagement>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("code", criteria.getCode(),criteria.getCodeLike());
        addPredicate("libelle", criteria.getLibelle(),criteria.getLibelleLike());
    }

    public AcessManagementSpecification(AcessManagementCriteria criteria) {
        super(criteria);
    }

    public AcessManagementSpecification(AcessManagementCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
