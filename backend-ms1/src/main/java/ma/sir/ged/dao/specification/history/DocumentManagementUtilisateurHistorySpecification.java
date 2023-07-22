package  ma.sir.ged.dao.specification.history;

import ma.sir.ged.zynerator.specification.AbstractHistorySpecification;
import ma.sir.ged.dao.criteria.history.DocumentManagementUtilisateurHistoryCriteria;
import ma.sir.ged.bean.history.DocumentManagementUtilisateurHistory;


public class DocumentManagementUtilisateurHistorySpecification extends AbstractHistorySpecification<DocumentManagementUtilisateurHistoryCriteria, DocumentManagementUtilisateurHistory> {

    public DocumentManagementUtilisateurHistorySpecification(DocumentManagementUtilisateurHistoryCriteria criteria) {
        super(criteria);
    }

    public DocumentManagementUtilisateurHistorySpecification(DocumentManagementUtilisateurHistoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
