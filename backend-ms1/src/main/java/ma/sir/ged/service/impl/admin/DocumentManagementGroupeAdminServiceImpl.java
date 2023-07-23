package ma.sir.ged.service.impl.admin;

import ma.sir.ged.bean.core.DocumentManagementGroupe;
import ma.sir.ged.bean.history.DocumentManagementGroupeHistory;
import ma.sir.ged.dao.criteria.core.DocumentManagementGroupeCriteria;
import ma.sir.ged.dao.criteria.history.DocumentManagementGroupeHistoryCriteria;
import ma.sir.ged.dao.facade.core.DocumentManagementGroupeDao;
import ma.sir.ged.dao.facade.history.DocumentManagementGroupeHistoryDao;
import ma.sir.ged.dao.specification.core.DocumentManagementGroupeSpecification;
import ma.sir.ged.service.facade.admin.DocumentManagementGroupeAdminService;
import ma.sir.ged.zynerator.service.AbstractServiceImpl;
import ma.sir.ged.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;


import ma.sir.ged.service.facade.admin.DocumentAdminService ;
import ma.sir.ged.service.facade.admin.AcessManagementAdminService ;
import ma.sir.ged.service.facade.admin.GroupeAdminService ;



import java.util.List;
@Service
public class DocumentManagementGroupeAdminServiceImpl extends AbstractServiceImpl<DocumentManagementGroupe,DocumentManagementGroupeHistory, DocumentManagementGroupeCriteria, DocumentManagementGroupeHistoryCriteria, DocumentManagementGroupeDao,
DocumentManagementGroupeHistoryDao> implements DocumentManagementGroupeAdminService {




    public List<DocumentManagementGroupe> findByDocumentId(Long id){
        return dao.findByDocumentId(id);
    }
    public int deleteByDocumentId(Long id){
        return dao.deleteByDocumentId(id);
    }
    public List<DocumentManagementGroupe> findByGroupeId(Long id){
        return dao.findByGroupeId(id);
    }
    public int deleteByGroupeId(Long id){
        return dao.deleteByGroupeId(id);
    }
    public List<DocumentManagementGroupe> findByAcessManagementId(Long id){
        return dao.findByAcessManagementId(id);
    }
    public int deleteByAcessManagementId(Long id){
        return dao.deleteByAcessManagementId(id);
    }




    public void configure() {
        super.configure(DocumentManagementGroupe.class,DocumentManagementGroupeHistory.class, DocumentManagementGroupeHistoryCriteria.class, DocumentManagementGroupeSpecification.class);
    }

    @Autowired
    private DocumentAdminService documentService ;
    @Autowired
    private AcessManagementAdminService acessManagementService ;
    @Autowired
    private GroupeAdminService groupeService ;

    public DocumentManagementGroupeAdminServiceImpl(DocumentManagementGroupeDao dao, DocumentManagementGroupeHistoryDao historyDao) {
        super(dao, historyDao);
    }

}