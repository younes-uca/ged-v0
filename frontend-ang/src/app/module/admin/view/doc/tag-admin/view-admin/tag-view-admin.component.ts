import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TagService} from 'src/app/controller/service/Tag.service';
import {TagDto} from 'src/app/controller/model/Tag.model';
import {TagCriteria} from 'src/app/controller/criteria/TagCriteria.model';

@Component({
  selector: 'app-tag-view-admin',
  templateUrl: './tag-view-admin.component.html'
})
export class TagViewAdminComponent extends AbstractViewController<TagDto, TagCriteria, TagService> implements OnInit {


    constructor(private tagService: TagService){
        super(tagService);
    }

    ngOnInit(): void {
    }




}
