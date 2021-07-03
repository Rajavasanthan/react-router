import React from 'react'

function UserEdit(props) {
    let userId = props.match.params.id
    return (
        <div>
            User Edit - {userId}
        </div>
    )
}

export default UserEdit
