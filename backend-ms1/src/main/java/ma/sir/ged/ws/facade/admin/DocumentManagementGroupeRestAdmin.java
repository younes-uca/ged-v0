package  ma.sir.ged.ws.facade.admin;


import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import ma.sir.ged.bean.core.DocumentManagementGroupe;
import ma.sir.ged.bean.history.DocumentManagementGroupeHistory;
import ma.sir.ged.dao.criteria.core.DocumentManagementGroupeCriteria;
import ma.sir.ged.dao.criteria.history.DocumentManagementGroupeHistoryCriteria;
import ma.sir.ged.service.facade.admin.DocumentManagementGroupeAdminService;
import ma.sir.ged.ws.converter.DocumentManagementGroupeConverter;
import ma.sir.ged.ws.dto.DocumentManagementGroupeDto;
import ma.sir.ged.zynerator.controller.AbstractController;
import ma.sir.ged.zynerator.dto.AuditEntityDto;
import ma.sir.ged.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.sir.ged.zynerator.process.Result;


import org.springframework.web.multipart.MultipartFile;
import ma.sir.ged.zynerator.dto.FileTempDto;

@Tag(name = "Manages documentManagementGroupe services")
@RestController
@RequestMapping("/api/admin/documentManagementGroupe/")
public class DocumentManagementGroupeRestAdmin  extends AbstractController<DocumentManagementGroupe, DocumentManagementGroupeDto, DocumentManagementGroupeHistory, DocumentManagementGroupeCriteria, DocumentManagementGroupeHistoryCriteria, DocumentManagementGroupeAdminService, DocumentManagementGroupeConverter> {



    @Operation(summary = "upload one documentManagementGroupe")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple documentManagementGroupes")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all documentManagementGroupes")
    @GetMapping("")
    public ResponseEntity<List<DocumentManagementGroupeDto>> findAll() throws Exception {
        return super.findAll();
    }


    @Operation(summary = "Finds a documentManagementGroupe by id")
    @GetMapping("id/{id}")
    public ResponseEntity<DocumentManagementGroupeDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @Operation(summary = "Saves the specified  documentManagementGroupe")
    @PostMapping("")
    public ResponseEntity<DocumentManagementGroupeDto> save(@RequestBody DocumentManagementGroupeDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  documentManagementGroupe")
    @PutMapping("")
    public ResponseEntity<DocumentManagementGroupeDto> update(@RequestBody DocumentManagementGroupeDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of documentManagementGroupe")
    @PostMapping("multiple")
    public ResponseEntity<List<DocumentManagementGroupeDto>> delete(@RequestBody List<DocumentManagementGroupeDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified documentManagementGroupe")
    @DeleteMapping("")
    public ResponseEntity<DocumentManagementGroupeDto> delete(@RequestBody DocumentManagementGroupeDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified documentManagementGroupe")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple documentManagementGroupes by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "find by document id")
    @GetMapping("document/id/{id}")
    public List<DocumentManagementGroupe> findByDocumentId(@PathVariable Long id){
        return service.findByDocumentId(id);
    }
    @Operation(summary = "delete by document id")
    @DeleteMapping("document/id/{id}")
    public int deleteByDocumentId(@PathVariable Long id){
        return service.deleteByDocumentId(id);
    }
    @Operation(summary = "find by groupe id")
    @GetMapping("groupe/id/{id}")
    public List<DocumentManagementGroupe> findByGroupeId(@PathVariable Long id){
        return service.findByGroupeId(id);
    }
    @Operation(summary = "delete by groupe id")
    @DeleteMapping("groupe/id/{id}")
    public int deleteByGroupeId(@PathVariable Long id){
        return service.deleteByGroupeId(id);
    }
    @Operation(summary = "find by acessManagement id")
    @GetMapping("acessManagement/id/{id}")
    public List<DocumentManagementGroupe> findByAcessManagementId(@PathVariable Long id){
        return service.findByAcessManagementId(id);
    }
    @Operation(summary = "delete by acessManagement id")
    @DeleteMapping("acessManagement/id/{id}")
    public int deleteByAcessManagementId(@PathVariable Long id){
        return service.deleteByAcessManagementId(id);
    }
    @Operation(summary = "Finds documentManagementGroupes by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<DocumentManagementGroupeDto>> findByCriteria(@RequestBody DocumentManagementGroupeCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated documentManagementGroupes by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody DocumentManagementGroupeCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports documentManagementGroupes by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody DocumentManagementGroupeCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets documentManagementGroupe data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody DocumentManagementGroupeCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @Operation(summary = "Gets documentManagementGroupe history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @Operation(summary = "Gets documentManagementGroupe paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody DocumentManagementGroupeHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports documentManagementGroupe history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody DocumentManagementGroupeHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @Operation(summary = "Gets documentManagementGroupe history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody DocumentManagementGroupeHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public DocumentManagementGroupeRestAdmin (DocumentManagementGroupeAdminService service, DocumentManagementGroupeConverter converter) {
        super(service, converter);
    }


}