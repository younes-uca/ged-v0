package  ma.sir.ged.ws.facade.admin;


import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import ma.sir.ged.bean.core.DocumentAcessShare;
import ma.sir.ged.bean.history.DocumentAcessShareHistory;
import ma.sir.ged.dao.criteria.core.DocumentAcessShareCriteria;
import ma.sir.ged.dao.criteria.history.DocumentAcessShareHistoryCriteria;
import ma.sir.ged.service.facade.admin.DocumentAcessShareAdminService;
import ma.sir.ged.ws.converter.DocumentAcessShareConverter;
import ma.sir.ged.ws.dto.DocumentAcessShareDto;
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

@Tag(name = "Manages documentAcessShare services")
@RestController
@RequestMapping("/api/admin/documentAcessShare/")
public class DocumentAcessShareRestAdmin  extends AbstractController<DocumentAcessShare, DocumentAcessShareDto, DocumentAcessShareHistory, DocumentAcessShareCriteria, DocumentAcessShareHistoryCriteria, DocumentAcessShareAdminService, DocumentAcessShareConverter> {



    @Operation(summary = "upload one documentAcessShare")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple documentAcessShares")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all documentAcessShares")
    @GetMapping("")
    public ResponseEntity<List<DocumentAcessShareDto>> findAll() throws Exception {
        return super.findAll();
    }


    @Operation(summary = "Finds a documentAcessShare by id")
    @GetMapping("id/{id}")
    public ResponseEntity<DocumentAcessShareDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @Operation(summary = "Saves the specified  documentAcessShare")
    @PostMapping("")
    public ResponseEntity<DocumentAcessShareDto> save(@RequestBody DocumentAcessShareDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  documentAcessShare")
    @PutMapping("")
    public ResponseEntity<DocumentAcessShareDto> update(@RequestBody DocumentAcessShareDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of documentAcessShare")
    @PostMapping("multiple")
    public ResponseEntity<List<DocumentAcessShareDto>> delete(@RequestBody List<DocumentAcessShareDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified documentAcessShare")
    @DeleteMapping("")
    public ResponseEntity<DocumentAcessShareDto> delete(@RequestBody DocumentAcessShareDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified documentAcessShare")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple documentAcessShares by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "find by document id")
    @GetMapping("document/id/{id}")
    public List<DocumentAcessShare> findByDocumentId(@PathVariable Long id){
        return service.findByDocumentId(id);
    }
    @Operation(summary = "delete by document id")
    @DeleteMapping("document/id/{id}")
    public int deleteByDocumentId(@PathVariable Long id){
        return service.deleteByDocumentId(id);
    }
    @Operation(summary = "find by acessShare id")
    @GetMapping("acessShare/id/{id}")
    public List<DocumentAcessShare> findByAcessShareId(@PathVariable Long id){
        return service.findByAcessShareId(id);
    }
    @Operation(summary = "delete by acessShare id")
    @DeleteMapping("acessShare/id/{id}")
    public int deleteByAcessShareId(@PathVariable Long id){
        return service.deleteByAcessShareId(id);
    }
    @Operation(summary = "Finds documentAcessShares by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<DocumentAcessShareDto>> findByCriteria(@RequestBody DocumentAcessShareCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated documentAcessShares by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody DocumentAcessShareCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports documentAcessShares by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody DocumentAcessShareCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets documentAcessShare data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody DocumentAcessShareCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @Operation(summary = "Gets documentAcessShare history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @Operation(summary = "Gets documentAcessShare paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody DocumentAcessShareHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports documentAcessShare history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody DocumentAcessShareHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @Operation(summary = "Gets documentAcessShare history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody DocumentAcessShareHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public DocumentAcessShareRestAdmin (DocumentAcessShareAdminService service, DocumentAcessShareConverter converter) {
        super(service, converter);
    }


}