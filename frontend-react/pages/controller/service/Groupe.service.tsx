import axios, { AxiosResponse } from "axios";
import { API_URL } from '/layout/AppConfig';
import {BaseCriteria} from "/pages/zynerator/criteria/BaseCriteria.model";
import {PaginatedList} from "/pages/zynerator/dto/PaginatedList.model";
import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {GroupeDto} from '/pages/controller/model/Groupe.model';
import {GroupeCriteria} from "/pages/controller/criteria/GroupeCriteria.model";



export const GroupeService = {

   getList(): Promise<AxiosResponse<GroupeDto[]>> {
     return axios.get(API_URL + 'groupe/');
   },

   save(item: GroupeDto): Promise<AxiosResponse<GroupeDto>> {
     return axios.post(API_URL + 'groupe/', item);
   },

   update(item: GroupeDto): Promise<AxiosResponse<GroupeDto>> {
      return axios.put(API_URL + 'groupe/', item);
   },

   delete(id: number): Promise<AxiosResponse<GroupeDto>> {
      return axios.delete(API_URL + 'groupe/id/'+ id);
   },

   deleteList(items: GroupeDto[]): Promise<AxiosResponse<string>> {
      return axios.post(API_URL + 'groupe/multiple', items);
   },

   findPaginatedByCriteria(criteria:GroupeCriteria):Promise<AxiosResponse<PaginatedList<GroupeDto>>> {
     return axios.post<PaginatedList<GroupeDto>>(API_URL + 'groupe/find-paginated-by-criteria', criteria);
   }
};

