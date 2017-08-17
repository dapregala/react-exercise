import React from 'react';
import { connect } from 'react-redux';

const UsersContainer = ({users}) => {
    return (
        <div>
            <h2>Users</h2>
            <ul>{users.map((user) => {
               return (
                   <li>{user.name}</li>
               )
            })}</ul>
        </div>

    )
};

const mapStateToProps = (store) => ({
    "users": store.users
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)