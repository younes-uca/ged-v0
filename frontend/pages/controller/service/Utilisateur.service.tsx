import axios, { AxiosResponse } from "axios";
import { API_URL } from '/layout/AppConfig';
import {BaseCriteria} from "/pages/zynerator/criteria/BaseCriteria.model";
import {PaginatedList} from "/pages/zynerator/dto/PaginatedList.model";
import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {UtilisateurDto} from '/pages/controller/model/Utilisateur.model';
import {UtilisateurCriteria} from "/pages/controller/criteria/UtilisateurCriteria.model";



export const UtilisateurService = {

   getList(): Promise<AxiosResponse<UtilisateurDto[]>> {
     return axios.get(API_URL + 'utilisateur/');
   },

   save(item: UtilisateurDto): Promise<AxiosResponse<UtilisateurDto>> {
     return axios.post(API_URL + 'utilisateur/', item);
   },

   update(item: UtilisateurDto): Promise<AxiosResponse<UtilisateurDto>> {
      return axios.put(API_URL + 'utilisateur/', item);
   },

   delete(id: number): Promise<AxiosResponse<UtilisateurDto>> {
      return axios.delete(API_URL + 'utilisateur/id/'+ id);
   },

   deleteList(items: UtilisateurDto[]): Promise<AxiosResponse<string>> {
      return axios.post(API_URL + 'utilisateur/multiple', items);
   },

   findPaginatedByCriteria(criteria:UtilisateurCriteria):Promise<AxiosResponse<PaginatedList<UtilisateurDto>>> {
     return axios.post<PaginatedList<UtilisateurDto>>(API_URL + 'utilisateur/find-paginated-by-criteria', criteria);
   }
};

