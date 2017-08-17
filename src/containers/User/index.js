import React from 'react';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const UsersContainer = ({users}) => {
    return (
        <div>
            <h2>Users</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Image</TableHeaderColumn>
                        <TableHeaderColumn>Active</TableHeaderColumn>
                        <TableHeaderColumn>Balance</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Company</TableHeaderColumn>
                        <TableHeaderColumn>Email</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user, key) => {
                        return (
                            <TableRow key={key}>
                                <TableRowColumn>{user.picture}</TableRowColumn>
                                <TableRowColumn>{user.isActive}</TableRowColumn>
                                <TableRowColumn>{user.balance}</TableRowColumn>
                                <TableRowColumn>{user.name}</TableRowColumn>
                                <TableRowColumn>{user.company}</TableRowColumn>
                                <TableRowColumn>{user.email}</TableRowColumn>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>

    )
};

const mapStateToProps = (store) => ({
    "users": store.users
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)