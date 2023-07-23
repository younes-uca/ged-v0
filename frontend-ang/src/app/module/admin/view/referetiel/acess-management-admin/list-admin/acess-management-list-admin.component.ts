import {Component, OnInit} from '@angular/core';
import {AcessManagementService} from 'src/app/controller/service/AcessManagement.service';
import {AcessManagementDto} from 'src/app/controller/model/AcessManagement.model';
import {AcessManagementCriteria} from 'src/app/controller/criteria/AcessManagementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-acess-management-list-admin',
  templateUrl: './acess-management-list-admin.component.html'
})
export class AcessManagementListAdminComponent extends AbstractListController<AcessManagementDto, AcessManagementCriteria, AcessManagementService>  implements OnInit {

    fileName = 'AcessManagement';


constructor( private acessManagementService: AcessManagementService ) {
        super(acessManagementService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadAcessManagements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('AcessManagement', 'list');
        isPermistted ? this.service.findAll().subscribe(acessManagements => this.items = acessManagements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: AcessManagementDto) {
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
