import React from 'react';
import { connect } from 'react-redux';
import User from './Users';

const UsersList = (props) => {
    const { users } = props
    return (
            <div className="user-list">
                { users && 
                  users.map((user) => <User key={user.login.uuid} {...user} />
                )}
            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state
    };
};

export default connect(mapStateToProps)(UsersList);
