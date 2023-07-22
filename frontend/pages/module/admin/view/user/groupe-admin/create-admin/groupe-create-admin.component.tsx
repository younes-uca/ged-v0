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
import {GroupeService} from '/pages/controller/service/Groupe.service';
import  {GroupeDto}  from '/pages/controller/model/Groupe.model';
import {GroupeUtilisateurDto} from '/pages/controller/model/GroupeUtilisateur.model';
import {GroupeUtilisateurService} from '/pages/controller/service/GroupeUtilisateur.service';
import {UtilisateurDto} from '/pages/controller/model/Utilisateur.model';
import {UtilisateurService} from '/pages/controller/service/Utilisateur.service';
const Create = ({visible, onClose, add, showToast, list}) => {

    const emptyItem = new GroupeDto();
    const [items, setItems] = useState<GroupeDto[]>([list]);
    const [item, setItem] = useState<GroupeDto>(emptyItem);
    const [submitted, setSubmitted] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTab, setActiveTab] = useState(0);

    const [utilisateurs, setUtilisateurs] = useState<UtilisateurDto[]>([]);

    type GroupeUtilisateurResponse = AxiosResponse<GroupeUtilisateurDto[]>;
    type UtilisateurResponse = AxiosResponse<UtilisateurDto[]>;

    const [groupeUtilisateurs, setGroupeUtilisateurs] = useState<GroupeUtilisateurDto>(new GroupeUtilisateurDto());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [utilisateursResponse ] = await Promise.all<UtilisateurResponse>([
                    UtilisateurService.getList(),
                ]);
                setUtilisateurs(utilisateursResponse.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const onDropdownChange = (e, field) => {
        setItem((prevState) => ({ ...prevState, [field]: e.value}));
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
            const response = await GroupeService.save(_item);
			_item.id = response.data.id;
            _items.push(_item);
            add(_item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'Groupe Created', life: 3000 });
        }
        setItems(_items);
        onClose();
        setItem(emptyItem);
        setItem({...item, GroupeUtilisateurs: null, });
        setGroupeUtilisateurs(new GroupeUtilisateurDto());
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
    <Dialog visible={visible} style={{width: '70vw'}} header="Groupe" modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header="Groupe">
                <div className="formgrid grid">
                    <div className="field col-6">
                    <label htmlFor="code">Code</label>
                    <InputText id="code" value={item.code} onChange={(e) => onInputTextChange(e, 'code')} required autoFocus className={classNames({'p-invalid': submitted && !item.code})} />
                    {submitted && !item.code && <small className="p-invalid">Code is required.</small>}
                    </div>
                    <div className="field col-6">
                    <label htmlFor="libelle">Libelle</label>
                    <InputText id="libelle" value={item.libelle} onChange={(e) => onInputTextChange(e, 'libelle')} required autoFocus className={classNames({'p-invalid': submitted && !item.libelle})} />
                    {submitted && !item.libelle && <small className="p-invalid">Libelle is required.</small>}
                    </div>
                    <div className="field col-6">
                    <label htmlFor="utilisateur">Utilisateur</label>
                    <Dropdown  id="utilisateurDropdown"  value={item.utilisateur} options={utilisateurs} onChange={(e) => onDropdownChange(e, 'utilisateur')}   placeholder="Sélectionnez un utilisateur" filter filterPlaceholder="Rechercher un utilisateur" optionLabel="name" />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="groupeUtilisateurs">Utilisateur</label>
                    <MultiSelect value={item.groupeUtilisateurs} options={groupeUtilisateurs}  optionLabel="utilisateur.name" display="chip" placeholder="Select utilisateur"  maxSelectedLabels={3}  onChange={(e) => onMultiSelectChange(e, 'groupeUtilisateurs')} />
                    </div>
                </div>
            </TabPanel>
        </TabView>
    </Dialog>
);
};
export default Create;
