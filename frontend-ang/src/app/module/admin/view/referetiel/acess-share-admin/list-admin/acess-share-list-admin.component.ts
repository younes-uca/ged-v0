import {Component, OnInit} from '@angular/core';
import {AcessShareService} from 'src/app/controller/service/AcessShare.service';
import {AcessShareDto} from 'src/app/controller/model/AcessShare.model';
import {AcessShareCriteria} from 'src/app/controller/criteria/AcessShareCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-acess-share-list-admin',
  templateUrl: './acess-share-list-admin.component.html'
})
export class AcessShareListAdminComponent extends AbstractListController<AcessShareDto, AcessShareCriteria, AcessShareService>  implements OnInit {

    fileName = 'AcessShare';


constructor( private acessShareService: AcessShareService ) {
        super(acessShareService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadAcessShares(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('AcessShare', 'list');
        isPermistted ? this.service.findAll().subscribe(acessShares => this.items = acessShares,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: AcessShareDto) {
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
