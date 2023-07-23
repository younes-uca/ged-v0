/* eslint-disable @next/next/no-img-element */

import React, {useContext} from 'react';
import AppMenuitem from '/layout/AppMenuitem';
import {LayoutContext} from '/layout/context/layoutcontext';
import {MenuProvider} from '/layout/context/menucontext';
import {AppMenuItem} from '/types/types';

const AppMenu = () => {
    const {layoutConfig} = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [{label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard'}]
        },


        {
            label: 'Pages',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [

                {
                    label: 'Auth',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Error',
                            icon: 'pi pi-fw pi-times-circle',
                            to: '/auth/error'
                        },
                        {
                            label: 'Access Denied',
                            icon: 'pi pi-fw pi-lock',
                            to: '/auth/access'
                        }
                    ]
                },
                                {
                    label: 'Collaborator',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                      {
                      label: 'Liste tag',
                     to: '/module/admin/view/doc/tag-admin/list-admin/tag-list-admin.component'
                      },
                      {
                      label: 'Liste document type',
                     to: '/module/admin/view/doc/document-type-admin/list-admin/document-type-list-admin.component'
                      },
                    ]
                    },
                {
                    label: 'Document Management',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                      {
                      label: 'Liste document',
                     to: '/module/admin/view/doc/document-admin/list-admin/document-list-admin.component'
                      },
                    ]
                    },
                {
                    label: 'Referentiel',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                      {
                      label: 'Liste acess management',
                     to: '/module/admin/view/referetiel/acess-management-admin/list-admin/acess-management-list-admin.component'
                      },
                      {
                      label: 'Liste acess share',
                     to: '/module/admin/view/referetiel/acess-share-admin/list-admin/acess-share-list-admin.component'
                      },
                    ]
                    },
                {
                    label: 'User Management',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                      {
                      label: 'Liste entite administrative',
                     to: '/module/admin/view/user/entite-administrative-admin/list-admin/entite-administrative-list-admin.component'
                      },
                      {
                      label: 'Liste utilisateur',
                     to: '/module/admin/view/user/utilisateur-admin/list-admin/utilisateur-list-admin.component'
                      },
                      {
                      label: 'Liste groupe',
                     to: '/module/admin/view/user/groupe-admin/list-admin/groupe-list-admin.component'
                      },
                    ]
                    },

                {
                    label: 'Timeline',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/pages/timeline'
                },
                {
                    label: 'Not Found',
                    icon: 'pi pi-fw pi-exclamation-circle',
                    to: '/pages/notfound'
                },
                {
                    label: 'Empty',
                    icon: 'pi pi-fw pi-circle-off',
                    to: '/pages/empty'
                }
            ]
        },

    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label}/> :
                        <li className="menu-separator"></li>;
                })}


            </ul>
        </MenuProvider>
    );
};


export default AppMenu;
