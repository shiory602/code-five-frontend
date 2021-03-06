import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SettingsIcon from '@material-ui/icons/Settings';

export const MenuItems = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        url: '/',
        cName: 'nav-links',
        adminLink: false
    },
    {
        title: 'History',
        icon: <ListAltIcon />,
        url: '/history',
        cName: 'nav-links',
        adminLink: false
    },
    {
        title: 'Approval',
        icon: <AssignmentTurnedInIcon />,
        url: '/approval',
        cName: 'nav-links',
        adminLink: true
    },
    {
        title: 'Settings',
        icon: <SettingsIcon />,
        url: '/settings',
        cName: 'nav-links',
        adminLink: false
    }
]