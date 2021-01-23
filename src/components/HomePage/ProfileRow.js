import React from 'react'
import { Avatar } from '@material-ui/core'


function ProfileRow({Name}) {
    const seed = Math.floor(Math.random() * 10000)

    return (
        <div className="profileRow">
            <Avatar className="avatar" src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`} />
            <p className="leftPanel--name">{Name}</p>
        </div>
    )
}

export default ProfileRow
