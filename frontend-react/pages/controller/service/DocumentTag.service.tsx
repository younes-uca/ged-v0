import axios, { AxiosResponse } from "axios";
import { API_URL } from '/layout/AppConfig';
import {BaseCriteria} from "/pages/zynerator/criteria/BaseCriteria.model";
import {PaginatedList} from "/pages/zynerator/dto/PaginatedList.model";
import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {DocumentTagDto} from '/pages/controller/model/DocumentTag.model';
import {DocumentTagCriteria} from "/pages/controller/criteria/DocumentTagCriteria.model";



export const DocumentTagService = {

   getList(): Promise<AxiosResponse<DocumentTagDto[]>> {
     return axios.get(API_URL + 'documentTag/');
   },

   save(item: DocumentTagDto): Promise<AxiosResponse<DocumentTagDto>> {
     return axios.post(API_URL + 'documentTag/', item);
   },

   update(item: DocumentTagDto): Promise<AxiosResponse<DocumentTagDto>> {
      return axios.put(API_URL + 'documentTag/', item);
   },

   delete(id: number): Promise<AxiosResponse<DocumentTagDto>> {
      return axios.delete(API_URL + 'documentTag/id/'+ id);
   },

   deleteList(items: DocumentTagDto[]): Promise<AxiosResponse<string>> {
      return axios.post(API_URL + 'documentTag/multiple', items);
   },

   findPaginatedByCriteria(criteria:DocumentTagCriteria):Promise<AxiosResponse<PaginatedList<DocumentTagDto>>> {
     return axios.post<PaginatedList<DocumentTagDto>>(API_URL + 'documentTag/find-paginated-by-criteria', criteria);
   }
};

