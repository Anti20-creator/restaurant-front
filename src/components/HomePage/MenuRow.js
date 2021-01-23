import React from 'react'

function MenuRow({Icon, Caption}) {
    return (
        <div className="row">
            <Icon className="icon" />
            <p className="leftPanelRow--caption">{Caption}</p>
        </div>
    )
}

export default MenuRow
