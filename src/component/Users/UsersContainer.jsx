import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching
}  from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';

export class UsersContainer extends React.Component {

  componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response => {
              this.props.toggleIsFetching(false)
              this.props.setUsers(response.data.items)
          })
  }

    onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      currentPage={this.props.currentPage}
                      isFetching={this.props.isFetching}
        />
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
export default connect(mapStateToProps,
    {setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);
