import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import {Dropdown} from 'primereact/dropdown';
import {TabView, TabPanel} from 'primereact/tabview';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputNumber, InputNumberChangeEvent} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {classNames} from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {Calendar, CalendarChangeEvent} from 'primereact/calendar';
import { format } from 'date-fns';
import {InputNumberChangeEvent} from 'primereact/inputnumber';
import { InputSwitch } from "primereact/inputswitch";
import {MultiSelect} from "primereact/multiselect";
import {MessageService} from "/pages/controller/service/MessageService";
import {DocumentService} from '/pages/controller/service/Document.service';
import  {DocumentDto}  from '/pages/controller/model/Document.model';
import {DocumentPartageGroupeDto} from '/pages/controller/model/DocumentPartageGroupe.model';
import {DocumentPartageGroupeService} from '/pages/controller/service/DocumentPartageGroupe.service';
import {DocumentManagementGroupeDto} from '/pages/controller/model/DocumentManagementGroupe.model';
import {DocumentManagementGroupeService} from '/pages/controller/service/DocumentManagementGroupe.service';
import {DocumentPartageUtilisateurDto} from '/pages/controller/model/DocumentPartageUtilisateur.model';
import {DocumentPartageUtilisateurService} from '/pages/controller/service/DocumentPartageUtilisateur.service';
import {DocumentTagDto} from '/pages/controller/model/DocumentTag.model';
import {DocumentTagService} from '/pages/controller/service/DocumentTag.service';
import {DocumentManagementUtilisateurDto} from '/pages/controller/model/DocumentManagementUtilisateur.model';
import {DocumentManagementUtilisateurService} from '/pages/controller/service/DocumentManagementUtilisateur.service';
import {AcessManagementDto} from '/pages/controller/model/AcessManagement.model';
import {AcessManagementService} from '/pages/controller/service/AcessManagement.service';
import {TagDto} from '/pages/controller/model/Tag.model';
import {TagService} from '/pages/controller/service/Tag.service';
import {DocumentAcessShareDto} from '/pages/controller/model/DocumentAcessShare.model';
import {DocumentAcessShareService} from '/pages/controller/service/DocumentAcessShare.service';
import {UtilisateurDto} from '/pages/controller/model/Utilisateur.model';
import {UtilisateurService} from '/pages/controller/service/Utilisateur.service';
import {DocumentTypeDto} from '/pages/controller/model/DocumentType.model';
import {DocumentTypeService} from '/pages/controller/service/DocumentType.service';
import {EntiteAdministrativeDto} from '/pages/controller/model/EntiteAdministrative.model';
import {EntiteAdministrativeService} from '/pages/controller/service/EntiteAdministrative.service';
import {GroupeDto} from '/pages/controller/model/Groupe.model';
import {GroupeService} from '/pages/controller/service/Groupe.service';
import {AcessShareDto} from '/pages/controller/model/AcessShare.model';
import {AcessShareService} from '/pages/controller/service/AcessShare.service';
const Create = ({visible, onClose, add, showToast, list}) => {

    const emptyItem = new DocumentDto();
    const [items, setItems] = useState<DocumentDto[]>([list]);
    const [item, setItem] = useState<DocumentDto>(emptyItem);
    const [submitted, setSubmitted] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTab, setActiveTab] = useState(0);

    const [utilisateurs, setUtilisateurs] = useState<UtilisateurDto[]>([]);
    const [entiteAdministratives, setEntiteAdministratives] = useState<EntiteAdministrativeDto[]>([]);
    const [groupes, setGroupes] = useState<GroupeDto[]>([]);
    const [documentTypes, setDocumentTypes] = useState<DocumentTypeDto[]>([]);
    const [tags, setTags] = useState<TagDto[]>([]);
    const [acessManagements, setAcessManagements] = useState<AcessManagementDto[]>([]);
    const [acessShares, setAcessShares] = useState<AcessShareDto[]>([]);

    type DocumentPartageGroupeResponse = AxiosResponse<DocumentPartageGroupeDto[]>;
    type DocumentManagementGroupeResponse = AxiosResponse<DocumentManagementGroupeDto[]>;
    type DocumentPartageUtilisateurResponse = AxiosResponse<DocumentPartageUtilisateurDto[]>;
    type DocumentTagResponse = AxiosResponse<DocumentTagDto[]>;
    type DocumentManagementUtilisateurResponse = AxiosResponse<DocumentManagementUtilisateurDto[]>;
    type AcessManagementResponse = AxiosResponse<AcessManagementDto[]>;
    type TagResponse = AxiosResponse<TagDto[]>;
    type DocumentAcessShareResponse = AxiosResponse<DocumentAcessShareDto[]>;
    type UtilisateurResponse = AxiosResponse<UtilisateurDto[]>;
    type DocumentTypeResponse = AxiosResponse<DocumentTypeDto[]>;
    type EntiteAdministrativeResponse = AxiosResponse<EntiteAdministrativeDto[]>;
    type GroupeResponse = AxiosResponse<GroupeDto[]>;
    type AcessShareResponse = AxiosResponse<AcessShareDto[]>;

    const [documentPartageGroupes, setDocumentPartageGroupes] = useState<DocumentPartageGroupeDto>(new DocumentPartageGroupeDto());
    const [documentPartageUtilisateurs, setDocumentPartageUtilisateurs] = useState<DocumentPartageUtilisateurDto>(new DocumentPartageUtilisateurDto());
    const [documentManagementGroupes, setDocumentManagementGroupes] = useState<DocumentManagementGroupeDto>(new DocumentManagementGroupeDto());
    const [documentManagementUtilisateurs, setDocumentManagementUtilisateurs] = useState<DocumentManagementUtilisateurDto>(new DocumentManagementUtilisateurDto());
    const [documentAcessShares, setDocumentAcessShares] = useState<DocumentAcessShareDto>(new DocumentAcessShareDto());
    const [documentTags, setDocumentTags] = useState<DocumentTagDto>(new DocumentTagDto());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [utilisateursResponse ,entiteAdministrativesResponse ,groupesResponse ,documentTypesResponse ,tagsResponse ,acessManagementsResponse ,acessSharesResponse ] = await Promise.all<UtilisateurResponse,EntiteAdministrativeResponse,GroupeResponse,DocumentTypeResponse,TagResponse,AcessManagementResponse,AcessShareResponse>([
                    UtilisateurService.getList(),
                    EntiteAdministrativeService.getList(),
                    GroupeService.getList(),
                    DocumentTypeService.getList(),
                    TagService.getList(),
                    AcessManagementService.getList(),
                    AcessShareService.getList(),
                ]);
                setUtilisateurs(utilisateursResponse.data);
                setEntiteAdministratives(entiteAdministrativesResponse.data);
                setGroupes(groupesResponse.data);
                setDocumentTypes(documentTypesResponse.data);
                setTags(tagsResponse.data);
                setAcessManagements(acessManagementsResponse.data);
                setAcessShares(acessSharesResponse.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const onDropdownChange = (e, field) => {
        setItem((prevState) => ({ ...prevState, [field]: e.value}));
    };

    const addDocumentPartageGroupes = () => {
        setSubmitted(true);
        if( item.documentPartageGroupes == null )
        item.documentPartageGroupes = new Array<DocumentPartageGroupeDto>();
        let _item = documentPartageGroupes;
        if (!_item.id) {
            item.documentPartageGroupes.push(_item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'DocumentPartageGroupes Created', life: 3000 });
            setItem((prevState :any) => ({...prevState, documentPartageGroupes: item.documentPartageGroupes }));
        } else {
            const updatedItems = item.documentPartageGroupes.map((item) => item.id === documentPartageGroupes.id ? {...documentPartageGroupes} : item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'DocumentPartageGroupes Updated', life: 3000 });
            setItem((prevState :any) => ({ ...prevState, documentPartageGroupes: updatedItems}));
        }
        setDocumentPartageGroupes(new DocumentPartageGroupeDto());
    };

    const deleteDocumentPartageGroupes = (rowData) => {
        const updatedItems = item.documentPartageGroupes.filter((val) => val !== rowData);
        setItem((prevState ) => ({...prevState,documentPartageGroupes: updatedItems }));
        setDocumentPartageGroupes(new DocumentPartageGroupeDto());
        MessageService.showToast(showToast, {severity: 'success', summary: 'Successful', detail: 'DocumentItem Deleted', life: 3000});
    };

    const editDocumentPartageGroupes = (rowData) => {
         setActiveTab(0);
         setDocumentPartageGroupes(rowData);

    };

    const onInputNumerChangeDocumentPartageGroupes = (e, name) => {
         const val = e.value || 0;
         setDocumentPartageGroupes((prevDocumentPartageGroupes) => ({...prevDocumentPartageGroupes, [name]: val, }));
    };
    const onDropdownChangeDocumentPartageGroupes = (e, field) => {
        setDocumentPartageGroupes((prevState) => ({ ...prevState, [field]: e.value}));
    };

    const onMultiSelectChangeDocumentPartageGroupes = (e, field) => {
        if (e && e.value && Array.isArray(e.value)) {
            const selectedValues = e.value.map(option => option && option.value);
            setDocumentPartageGroupes(prevState => ({ ...prevState, [field]: selectedValues, }));
        }
    };

    const onBooleanInputChangeDocumentPartageGroupes = (e: any, name: string) => {
       const val = e.value;
       setDocumentPartageGroupes((prevItem) => ({ ...prevItem, [name]: val, }));
    };

    const onInputDateChangeDocumentPartageGroupes = (e: CalendarChangeEvent, name: string) => {
        const val = e.value || '';
        let _item = { ...documentPartageGroupes};
        _item[`${name}`] = val;
        setDocumentPartageGroupes(_item);
    };

    const onInputTextChangeDocumentPartageGroupes = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
         const val = (e.target && e.target.value) || '';
         let _item = {...documentPartageGroupes};
         _item[`${name}`] = val;
         setDocumentPartageGroupes(_item);
    };
    const addDocumentPartageUtilisateurs = () => {
        setSubmitted(true);
        if( item.documentPartageUtilisateurs == null )
        item.documentPartageUtilisateurs = new Array<DocumentPartageUtilisateurDto>();
        let _item = documentPartageUtilisateurs;
        if (!_item.id) {
            item.documentPartageUtilisateurs.push(_item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'DocumentPartageUtilisateurs Created', life: 3000 });
            setItem((prevState :any) => ({...prevState, documentPartageUtilisateurs: item.documentPartageUtilisateurs }));
        } else {
            const updatedItems = item.documentPartageUtilisateurs.map((item) => item.id === documentPartageUtilisateurs.id ? {...documentPartageUtilisateurs} : item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'DocumentPartageUtilisateurs Updated', life: 3000 });
            setItem((prevState :any) => ({ ...prevState, documentPartageUtilisateurs: updatedItems}));
        }
        setDocumentPartageUtilisateurs(new DocumentPartageUtilisateurDto());
    };

    const deleteDocumentPartageUtilisateurs = (rowData) => {
        const updatedItems = item.documentPartageUtilisateurs.filter((val) => val !== rowData);
        setItem((prevState ) => ({...prevState,documentPartageUtilisateurs: updatedItems }));
        setDocumentPartageUtilisateurs(new DocumentPartageUtilisateurDto());
        MessageService.showToast(showToast, {severity: 'success', summary: 'Successful', detail: 'DocumentItem Deleted', life: 3000});
    };

    const editDocumentPartageUtilisateurs = (rowData) => {
         setActiveTab(0);
         setDocumentPartageUtilisateurs(rowData);

    };

    const onInputNumerChangeDocumentPartageUtilisateurs = (e, name) => {
         const val = e.value || 0;
         setDocumentPartageUtilisateurs((prevDocumentPartageUtilisateurs) => ({...prevDocumentPartageUtilisateurs, [name]: val, }));
    };
    const onDropdownChangeDocumentPartageUtilisateurs = (e, field) => {
        setDocumentPartageUtilisateurs((prevState) => ({ ...prevState, [field]: e.value}));
    };

    const onMultiSelectChangeDocumentPartageUtilisateurs = (e, field) => {
        if (e && e.value && Array.isArray(e.value)) {
            const selectedValues = e.value.map(option => option && option.value);
            setDocumentPartageUtilisateurs(prevState => ({ ...prevState, [field]: selectedValues, }));
        }
    };

    const onBooleanInputChangeDocumentPartageUtilisateurs = (e: any, name: string) => {
       const val = e.value;
       setDocumentPartageUtilisateurs((prevItem) => ({ ...prevItem, [name]: val, }));
    };

    const onInputDateChangeDocumentPartageUtilisateurs = (e: CalendarChangeEvent, name: string) => {
        const val = e.value || '';
        let _item = { ...documentPartageUtilisateurs};
        _item[`${name}`] = val;
        setDocumentPartageUtilisateurs(_item);
    };

    const onInputTextChangeDocumentPartageUtilisateurs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
         const val = (e.target && e.target.value) || '';
         let _item = {...documentPartageUtilisateurs};
         _item[`${name}`] = val;
         setDocumentPartageUtilisateurs(_item);
    };
    const addDocumentManagementGroupes = () => {
        setSubmitted(true);
        if( item.documentManagementGroupes == null )
        item.documentManagementGroupes = new Array<DocumentManagementGroupeDto>();
        let _item = documentManagementGroupes;
        if (!_item.id) {
            item.documentManagementGroupes.push(_item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'DocumentManagementGroupes Created', life: 3000 });
            setItem((prevState :any) => ({...prevState, documentManagementGroupes: item.documentManagementGroupes }));
        } else {
            const updatedItems = item.documentManagementGroupes.map((item) => item.id === documentManagementGroupes.id ? {...documentManagementGroupes} : item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'DocumentManagementGroupes Updated', life: 3000 });
            setItem((prevState :any) => ({ ...prevState, documentManagementGroupes: updatedItems}));
        }
        setDocumentManagementGroupes(new DocumentManagementGroupeDto());
    };

    const deleteDocumentManagementGroupes = (rowData) => {
        const updatedItems = item.documentManagementGroupes.filter((val) => val !== rowData);
        setItem((prevState ) => ({...prevState,documentManagementGroupes: updatedItems }));
        setDocumentManagementGroupes(new DocumentManagementGroupeDto());
        MessageService.showToast(showToast, {severity: 'success', summary: 'Successful', detail: 'DocumentItem Deleted', life: 3000});
    };

    const editDocumentManagementGroupes = (rowData) => {
         setActiveTab(0);
         setDocumentManagementGroupes(rowData);

    };

    const onInputNumerChangeDocumentManagementGroupes = (e, name) => {
         const val = e.value || 0;
         setDocumentManagementGroupes((prevDocumentManagementGroupes) => ({...prevDocumentManagementGroupes, [name]: val, }));
    };
    const onDropdownChangeDocumentManagementGroupes = (e, field) => {
        setDocumentManagementGroupes((prevState) => ({ ...prevState, [field]: e.value}));
    };

    const onMultiSelectChangeDocumentManagementGroupes = (e, field) => {
        if (e && e.value && Array.isArray(e.value)) {
            const selectedValues = e.value.map(option => option && option.value);
            setDocumentManagementGroupes(prevState => ({ ...prevState, [field]: selectedValues, }));
        }
    };

    const onBooleanInputChangeDocumentManagementGroupes = (e: any, name: string) => {
       const val = e.value;
       setDocumentManagementGroupes((prevItem) => ({ ...prevItem, [name]: val, }));
    };

    const onInputDateChangeDocumentManagementGroupes = (e: CalendarChangeEvent, name: string) => {
        const val = e.value || '';
        let _item = { ...documentManagementGroupes};
        _item[`${name}`] = val;
        setDocumentManagementGroupes(_item);
    };

    const onInputTextChangeDocumentManagementGroupes = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
         const val = (e.target && e.target.value) || '';
         let _item = {...documentManagementGroupes};
         _item[`${name}`] = val;
         setDocumentManagementGroupes(_item);
    };
    const addDocumentManagementUtilisateurs = () => {
        setSubmitted(true);
        if( item.documentManagementUtilisateurs == null )
        item.documentManagementUtilisateurs = new Array<DocumentManagementUtilisateurDto>();
        let _item = documentManagementUtilisateurs;
        if (!_item.id) {
            item.documentManagementUtilisateurs.push(_item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'DocumentManagementUtilisateurs Created', life: 3000 });
            setItem((prevState :any) => ({...prevState, documentManagementUtilisateurs: item.documentManagementUtilisateurs }));
        } else {
            const updatedItems = item.documentManagementUtilisateurs.map((item) => item.id === documentManagementUtilisateurs.id ? {...documentManagementUtilisateurs} : item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'DocumentManagementUtilisateurs Updated', life: 3000 });
            setItem((prevState :any) => ({ ...prevState, documentManagementUtilisateurs: updatedItems}));
        }
        setDocumentManagementUtilisateurs(new DocumentManagementUtilisateurDto());
    };

    const deleteDocumentManagementUtilisateurs = (rowData) => {
        const updatedItems = item.documentManagementUtilisateurs.filter((val) => val !== rowData);
        setItem((prevState ) => ({...prevState,documentManagementUtilisateurs: updatedItems }));
        setDocumentManagementUtilisateurs(new DocumentManagementUtilisateurDto());
        MessageService.showToast(showToast, {severity: 'success', summary: 'Successful', detail: 'DocumentItem Deleted', life: 3000});
    };

    const editDocumentManagementUtilisateurs = (rowData) => {
         setActiveTab(0);
         setDocumentManagementUtilisateurs(rowData);

    };

    const onInputNumerChangeDocumentManagementUtilisateurs = (e, name) => {
         const val = e.value || 0;
         setDocumentManagementUtilisateurs((prevDocumentManagementUtilisateurs) => ({...prevDocumentManagementUtilisateurs, [name]: val, }));
    };
    const onDropdownChangeDocumentManagementUtilisateurs = (e, field) => {
        setDocumentManagementUtilisateurs((prevState) => ({ ...prevState, [field]: e.value}));
    };

    const onMultiSelectChangeDocumentManagementUtilisateurs = (e, field) => {
        if (e && e.value && Array.isArray(e.value)) {
            const selectedValues = e.value.map(option => option && option.value);
            setDocumentManagementUtilisateurs(prevState => ({ ...prevState, [field]: selectedValues, }));
        }
    };

    const onBooleanInputChangeDocumentManagementUtilisateurs = (e: any, name: string) => {
       const val = e.value;
       setDocumentManagementUtilisateurs((prevItem) => ({ ...prevItem, [name]: val, }));
    };

    const onInputDateChangeDocumentManagementUtilisateurs = (e: CalendarChangeEvent, name: string) => {
        const val = e.value || '';
        let _item = { ...documentManagementUtilisateurs};
        _item[`${name}`] = val;
        setDocumentManagementUtilisateurs(_item);
    };

    const onInputTextChangeDocumentManagementUtilisateurs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
         const val = (e.target && e.target.value) || '';
         let _item = {...documentManagementUtilisateurs};
         _item[`${name}`] = val;
         setDocumentManagementUtilisateurs(_item);
    };

    const onTabChange = (e: { index: number }) => { setActiveIndex(e.index); };

    const hideDialog = () => {
        setSubmitted(false);
        onClose();
    };

    const saveItem = async () => {
        setSubmitted(true);
        let _items = [...items];
        let _item = {...item};
        if (!_item.id) {
            const response = await DocumentService.save(_item);
			_item.id = response.data.id;
            _items.push(_item);
            add(_item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'Document Created', life: 3000 });
        }
        setItems(_items);
        onClose();
        setItem(emptyItem);
        setItem({...item, DocumentPartageGroupes: null, });
        setDocumentPartageGroupes(new DocumentPartageGroupeDto());
        setItem({...item, DocumentPartageUtilisateurs: null, });
        setDocumentPartageUtilisateurs(new DocumentPartageUtilisateurDto());
        setItem({...item, DocumentManagementGroupes: null, });
        setDocumentManagementGroupes(new DocumentManagementGroupeDto());
        setItem({...item, DocumentManagementUtilisateurs: null, });
        setDocumentManagementUtilisateurs(new DocumentManagementUtilisateurDto());
        setItem({...item, DocumentAcessShares: null, });
        setDocumentAcessShares(new DocumentAcessShareDto());
        setItem({...item, DocumentTags: null, });
        setDocumentTags(new DocumentTagDto());
    };

    const onInputTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _item = {...item};
        _item[`${name}`] = val;
        setItem(_item);
    };

    const onInputDateChange = (e: CalendarChangeEvent, name: string) => {
        const val = e.value || '';
        let _item = { ...item};
        _item[`${name}`] = val;
        setItem(_item);
    };

    const onInputNumerChange = (e: InputNumberChangeEvent, name: string) => {
        const val = e.value === null ? null : +e.value;
        setItem((prevItem) => ({ ...prevItem, [name]: val, }));
    };

    const onMultiSelectChange = (e, field) => {
      if (e && e.value && Array.isArray(e.value)) {
         const selectedValues = e.value.map(option => option && option.value);
         setItem(prevState => ({ ...prevState, [field]: selectedValues, }));
      }
    };

    const onBooleanInputChange = (e: any, name: string) => {
       const val = e.value;
       setItem((prevItem) => ({ ...prevItem, [name]: val, }));
    };

    const itemDialogFooter = ( <>
        <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog} />
        <Button label="Save" icon="pi pi-check" text onClick={saveItem} /> < />
    );

return(
    <Dialog visible={visible} style={{width: '70vw'}} header="Document" modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header="Document">
                <div className="formgrid grid">
                    <div className="field col-6">
                    <label htmlFor="reference">Reference</label>
                    <InputText id="reference" value={item.reference} onChange={(e) => onInputTextChange(e, 'reference')} required autoFocus className={classNames({'p-invalid': submitted && !item.reference})} />
                    {submitted && !item.reference && <small className="p-invalid">Reference is required.</small>}
                    </div>
                    <div className="field col-6">
                    <label htmlFor="uploadDate">UploadDate</label>
                    <Calendar id="uploadDate" value={item.uploadDate} onChange={(e) => onInputDateChange(e, 'uploadDate')} dateFormat="dd/mm/yy" showTime />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="dateLastUpdate">DateLastUpdate</label>
                    <Calendar id="dateLastUpdate" value={item.dateLastUpdate} onChange={(e) => onInputDateChange(e, 'dateLastUpdate')} dateFormat="dd/mm/yy" showTime />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="content">Content</label>
                    <InputText id="content" value={item.content} onChange={(e) => onInputTextChange(e, 'content')} required autoFocus className={classNames({'p-invalid': submitted && !item.content})} />
                    {submitted && !item.content && <small className="p-invalid">Content is required.</small>}
                    </div>
                    <div className="field col-6">
                    <label htmlFor="size">Size</label>
                    <InputNumber id="size" value={item.size} onChange={(e) => onInputNumerChange(e, 'size')} />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="documentType">DocumentType</label>
                    <Dropdown  id="documentTypeDropdown"  value={item.documentType} options={documentTypes} onChange={(e) => onDropdownChange(e, 'documentType')}   placeholder="Sélectionnez un documentType" filter filterPlaceholder="Rechercher un documentType" optionLabel="libelle" />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="description">Description</label>
                    <span className="p-float-label">
                    <InputTextarea id="description" value={item.description} onChange={(e) => onInputTextChange(e, 'description')} rows={5} cols={30}/>
                    </span>
                    </div>
                    <div className="field col-6">
                    <label htmlFor="utilisateur">Utilisateur</label>
                    <Dropdown  id="utilisateurDropdown"  value={item.utilisateur} options={utilisateurs} onChange={(e) => onDropdownChange(e, 'utilisateur')}   placeholder="Sélectionnez un utilisateur" filter filterPlaceholder="Rechercher un utilisateur" optionLabel="name" />
                    </div>
                    <div className="field col-6">
                    <div  class="label-inputswitch">
                    <label htmlFor="archive">Archive</label>
                    <span className="p-float-label">
                    <InputSwitch  id="archive" checked={item.archive} onChange={(e) => onBooleanInputChange(e, 'archive')} />
                    </span>
                    </div>
                    </div>
                    <div className="field col-6">
                    <div  class="label-inputswitch">
                    <label htmlFor="versionne">Versionne</label>
                    <span className="p-float-label">
                    <InputSwitch  id="versionne" checked={item.versionne} onChange={(e) => onBooleanInputChange(e, 'versionne')} />
                    </span>
                    </div>
                    </div>
                    <div className="field col-6">
                    <label htmlFor="entiteAdministrative">EntiteAdministrative</label>
                    <Dropdown  id="entiteAdministrativeDropdown"  value={item.entiteAdministrative} options={entiteAdministratives} onChange={(e) => onDropdownChange(e, 'entiteAdministrative')}   placeholder="Sélectionnez un entiteAdministrative" filter filterPlaceholder="Rechercher un entiteAdministrative" optionLabel="libelle" />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="documentAcessShares">Acess share</label>
                    <MultiSelect value={item.documentAcessShares} options={documentAcessShares}  optionLabel="acessShare.libelle" display="chip" placeholder="Select acessShare"  maxSelectedLabels={3}  onChange={(e) => onMultiSelectChange(e, 'documentAcessShares')} />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="documentTags">Tag</label>
                    <MultiSelect value={item.documentTags} options={documentTags}  optionLabel="tag.libelle" display="chip" placeholder="Select tag"  maxSelectedLabels={3}  onChange={(e) => onMultiSelectChange(e, 'documentTags')} />
                    </div>
                </div>
            </TabPanel>
            <TabPanel header="Document partage groupes">
                <TabView activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)}>
                    <TabPanel header="Creation">
                        <div className="grid">
                            <div className="field col-6">
                            <label htmlFor="groupe">Groupe</label>
                            <Dropdown id="groupeDropdown" value={documentPartageGroupes.groupe} options={groupes} onChange={(e) => onDropdownChangeDocumentPartageGroupes(e, 'groupe')} placeholder="Sélectionnez un groupe" filter  filterPlaceholder="Rechercher un groupe"  optionLabel="libelle" />
                             </div>
                            <div className="field col-6">
                            <label htmlFor="dateShare">dateShare</label>
                            <Calendar id="dateShare" value={documentPartageGroupes.dateShare}  onChange={(e) => onInputDateChangeDocumentPartageGroupes(e, 'dateShare')} dateFormat="dd/mm/yy" showTime  />
                            </div>
                            <div className="field col-6">
                            <label htmlFor="acessShare">Acess share</label>
                            <Dropdown id="acessShareDropdown" value={documentPartageGroupes.acessShare} options={acessShares} onChange={(e) => onDropdownChangeDocumentPartageGroupes(e, 'acessShare')} placeholder="Sélectionnez un acessShare" filter  filterPlaceholder="Rechercher un acessShare"  optionLabel="libelle" />
                             </div>
                            <div className="field col-1">
                                <Button icon="pi pi-plus" label="OK" className="mt-4" onClick={addDocumentPartageGroupes} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="Liste">
                    <div className="card">
                    <DataTable value={item.documentPartageGroupes} tableStyle={{minWidth: '50rem'}} dataKey="id">
                        <Column field="groupe.libelle" header="Groupe"></Column>
                        <Column field="dateShare" header="Date share"></Column>
                        <Column field="acessShare.libelle" header="Acess share"></Column>
                        <Column header="Actions" body={(rowData)=> (<div>
                        <Button icon="pi pi-times" rounded severity="warning" className="mr-2 p-button-danger" onClick={()=> deleteDocumentPartageGroupes(rowData)} />
                        <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={()=> editDocumentPartageGroupes(rowData)} /> </div>)}></Column>
                    </DataTable>
                    </div>
                    </TabPanel>
                < /TabView>
            </TabPanel>
            <TabPanel header="Document partage utilisateurs">
                <TabView activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)}>
                    <TabPanel header="Creation">
                        <div className="grid">
                            <div className="field col-6">
                            <label htmlFor="utilisateur">Utilisateur</label>
                            <Dropdown id="utilisateurDropdown" value={documentPartageUtilisateurs.utilisateur} options={utilisateurs} onChange={(e) => onDropdownChangeDocumentPartageUtilisateurs(e, 'utilisateur')} placeholder="Sélectionnez un utilisateur" filter  filterPlaceholder="Rechercher un utilisateur"  optionLabel="name" />
                             </div>
                            <div className="field col-6">
                            <label htmlFor="dateShare">dateShare</label>
                            <Calendar id="dateShare" value={documentPartageUtilisateurs.dateShare}  onChange={(e) => onInputDateChangeDocumentPartageUtilisateurs(e, 'dateShare')} dateFormat="dd/mm/yy" showTime  />
                            </div>
                            <div className="field col-6">
                            <label htmlFor="acessShare">Acess share</label>
                            <Dropdown id="acessShareDropdown" value={documentPartageUtilisateurs.acessShare} options={acessShares} onChange={(e) => onDropdownChangeDocumentPartageUtilisateurs(e, 'acessShare')} placeholder="Sélectionnez un acessShare" filter  filterPlaceholder="Rechercher un acessShare"  optionLabel="libelle" />
                             </div>
                            <div className="field col-1">
                                <Button icon="pi pi-plus" label="OK" className="mt-4" onClick={addDocumentPartageUtilisateurs} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="Liste">
                    <div className="card">
                    <DataTable value={item.documentPartageUtilisateurs} tableStyle={{minWidth: '50rem'}} dataKey="id">
                        <Column field="utilisateur.name" header="Utilisateur"></Column>
                        <Column field="dateShare" header="Date share"></Column>
                        <Column field="acessShare.libelle" header="Acess share"></Column>
                        <Column header="Actions" body={(rowData)=> (<div>
                        <Button icon="pi pi-times" rounded severity="warning" className="mr-2 p-button-danger" onClick={()=> deleteDocumentPartageUtilisateurs(rowData)} />
                        <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={()=> editDocumentPartageUtilisateurs(rowData)} /> </div>)}></Column>
                    </DataTable>
                    </div>
                    </TabPanel>
                < /TabView>
            </TabPanel>
            <TabPanel header="Document management groupes">
                <TabView activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)}>
                    <TabPanel header="Creation">
                        <div className="grid">
                            <div className="field col-6">
                            <label htmlFor="groupe">Groupe</label>
                            <Dropdown id="groupeDropdown" value={documentManagementGroupes.groupe} options={groupes} onChange={(e) => onDropdownChangeDocumentManagementGroupes(e, 'groupe')} placeholder="Sélectionnez un groupe" filter  filterPlaceholder="Rechercher un groupe"  optionLabel="libelle" />
                             </div>
                            <div className="field col-6">
                            <label htmlFor="dateManagement">dateManagement</label>
                            <Calendar id="dateManagement" value={documentManagementGroupes.dateManagement}  onChange={(e) => onInputDateChangeDocumentManagementGroupes(e, 'dateManagement')} dateFormat="dd/mm/yy" showTime  />
                            </div>
                            <div className="field col-6">
                            <label htmlFor="acessManagement">Acess management</label>
                            <Dropdown id="acessManagementDropdown" value={documentManagementGroupes.acessManagement} options={acessManagements} onChange={(e) => onDropdownChangeDocumentManagementGroupes(e, 'acessManagement')} placeholder="Sélectionnez un acessManagement" filter  filterPlaceholder="Rechercher un acessManagement"  optionLabel="libelle" />
                             </div>
                            <div className="field col-1">
                                <Button icon="pi pi-plus" label="OK" className="mt-4" onClick={addDocumentManagementGroupes} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="Liste">
                    <div className="card">
                    <DataTable value={item.documentManagementGroupes} tableStyle={{minWidth: '50rem'}} dataKey="id">
                        <Column field="groupe.libelle" header="Groupe"></Column>
                        <Column field="dateManagement" header="Date management"></Column>
                        <Column field="acessManagement.libelle" header="Acess management"></Column>
                        <Column header="Actions" body={(rowData)=> (<div>
                        <Button icon="pi pi-times" rounded severity="warning" className="mr-2 p-button-danger" onClick={()=> deleteDocumentManagementGroupes(rowData)} />
                        <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={()=> editDocumentManagementGroupes(rowData)} /> </div>)}></Column>
                    </DataTable>
                    </div>
                    </TabPanel>
                < /TabView>
            </TabPanel>
            <TabPanel header="Document management utilisateurs">
                <TabView activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)}>
                    <TabPanel header="Creation">
                        <div className="grid">
                            <div className="field col-6">
                            <label htmlFor="utilisateur">Utilisateur</label>
                            <Dropdown id="utilisateurDropdown" value={documentManagementUtilisateurs.utilisateur} options={utilisateurs} onChange={(e) => onDropdownChangeDocumentManagementUtilisateurs(e, 'utilisateur')} placeholder="Sélectionnez un utilisateur" filter  filterPlaceholder="Rechercher un utilisateur"  optionLabel="name" />
                             </div>
                            <div className="field col-6">
                            <label htmlFor="dateManagement">dateManagement</label>
                            <Calendar id="dateManagement" value={documentManagementUtilisateurs.dateManagement}  onChange={(e) => onInputDateChangeDocumentManagementUtilisateurs(e, 'dateManagement')} dateFormat="dd/mm/yy" showTime  />
                            </div>
                            <div className="field col-6">
                            <label htmlFor="acessManagement">Acess management</label>
                            <Dropdown id="acessManagementDropdown" value={documentManagementUtilisateurs.acessManagement} options={acessManagements} onChange={(e) => onDropdownChangeDocumentManagementUtilisateurs(e, 'acessManagement')} placeholder="Sélectionnez un acessManagement" filter  filterPlaceholder="Rechercher un acessManagement"  optionLabel="libelle" />
                             </div>
                            <div className="field col-1">
                                <Button icon="pi pi-plus" label="OK" className="mt-4" onClick={addDocumentManagementUtilisateurs} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="Liste">
                    <div className="card">
                    <DataTable value={item.documentManagementUtilisateurs} tableStyle={{minWidth: '50rem'}} dataKey="id">
                        <Column field="utilisateur.name" header="Utilisateur"></Column>
                        <Column field="dateManagement" header="Date management"></Column>
                        <Column field="acessManagement.libelle" header="Acess management"></Column>
                        <Column header="Actions" body={(rowData)=> (<div>
                        <Button icon="pi pi-times" rounded severity="warning" className="mr-2 p-button-danger" onClick={()=> deleteDocumentManagementUtilisateurs(rowData)} />
                        <Button icon="pi pi-pencil" rounded severity="success" className="mr-2" onClick={()=> editDocumentManagementUtilisateurs(rowData)} /> </div>)}></Column>
                    </DataTable>
                    </div>
                    </TabPanel>
                < /TabView>
            </TabPanel>
        </TabView>
    </Dialog>
);
};
export default Create;
