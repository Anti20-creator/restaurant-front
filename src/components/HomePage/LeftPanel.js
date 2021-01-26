import React, {useState, useEffect} from 'react'
import HomeIcon from '@material-ui/icons/Home'
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar } from '@material-ui/core'

import API from '../../config'
import MenuRow from './MenuRow'
import ProfileRow from './ProfileRow';

function LeftPanel() {

    const [name, setName] = useState('')

    useEffect(() => {
        API.get('/myName').then(resp => {
            setName(resp.data.name)
        })
    })

    const options = [
        {
            menuCaption: 'Main categories'
        },
        {
            icon: DashboardIcon,
            caption: 'Dashboard'
        },
        {
            icon: SettingsIcon,
            caption: 'Settings'
        },
        {
            icon: AccountCircleIcon,
            caption: 'Account'
        },
        {
            menuCaption: 'Main categories'
        },
        {
            icon: DashboardIcon,
            caption: 'Dashboard'
        },
        {
            icon: SettingsIcon,
            caption: 'Settings'
        },
        {
            icon: AccountCircleIcon,
            caption: 'Account'
        }
    ]

    return (
        <div className="leftPanel">
            <div className="header">
                <MenuRow Icon={HomeIcon} Caption="Home" />
            </div>
            <div className="items">
                {options.map((option) => {
                    return (option.menuCaption ? <p className="leftPanel--subcategory">{option.menuCaption}</p> : <MenuRow Icon={option.icon} Caption={option.caption} />)
                })}
            </div>
            <div>
                <ProfileRow Name={name} />          
            </div>
        </div>
    )
}

export default LeftPanel
