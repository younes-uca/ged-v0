import axios, { AxiosResponse } from "axios";
import { API_URL } from '/layout/AppConfig';
import {BaseCriteria} from "/pages/zynerator/criteria/BaseCriteria.model";
import {PaginatedList} from "/pages/zynerator/dto/PaginatedList.model";
import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {GroupeUtilisateurDto} from '/pages/controller/model/GroupeUtilisateur.model';
import {GroupeUtilisateurCriteria} from "/pages/controller/criteria/GroupeUtilisateurCriteria.model";



export const GroupeUtilisateurService = {

   getList(): Promise<AxiosResponse<GroupeUtilisateurDto[]>> {
     return axios.get(API_URL + 'groupeUtilisateur/');
   },

   save(item: GroupeUtilisateurDto): Promise<AxiosResponse<GroupeUtilisateurDto>> {
     return axios.post(API_URL + 'groupeUtilisateur/', item);
   },

   update(item: GroupeUtilisateurDto): Promise<AxiosResponse<GroupeUtilisateurDto>> {
      return axios.put(API_URL + 'groupeUtilisateur/', item);
   },

   delete(id: number): Promise<AxiosResponse<GroupeUtilisateurDto>> {
      return axios.delete(API_URL + 'groupeUtilisateur/id/'+ id);
   },

   deleteList(items: GroupeUtilisateurDto[]): Promise<AxiosResponse<string>> {
      return axios.post(API_URL + 'groupeUtilisateur/multiple', items);
   },

   findPaginatedByCriteria(criteria:GroupeUtilisateurCriteria):Promise<AxiosResponse<PaginatedList<GroupeUtilisateurDto>>> {
     return axios.post<PaginatedList<GroupeUtilisateurDto>>(API_URL + 'groupeUtilisateur/find-paginated-by-criteria', criteria);
   }
};

