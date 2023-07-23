import {Component, OnInit} from '@angular/core';
import {DocumentTypeService} from 'src/app/controller/service/DocumentType.service';
import {DocumentTypeDto} from 'src/app/controller/model/DocumentType.model';
import {DocumentTypeCriteria} from 'src/app/controller/criteria/DocumentTypeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-document-type-list-admin',
  templateUrl: './document-type-list-admin.component.html'
})
export class DocumentTypeListAdminComponent extends AbstractListController<DocumentTypeDto, DocumentTypeCriteria, DocumentTypeService>  implements OnInit {

    fileName = 'DocumentType';


constructor( private documentTypeService: DocumentTypeService ) {
        super(documentTypeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadDocumentTypes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DocumentType', 'list');
        isPermistted ? this.service.findAll().subscribe(documentTypes => this.items = documentTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: DocumentTypeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
