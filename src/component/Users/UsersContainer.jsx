import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    follow,
    unfollow, addPost, updateNewPostText
} from '../../redux/users-reducer';
import Users from './Users';
import {usersAPI} from "../../api/api";

export class UsersContainer extends React.Component {

  componentDidMount() {
      this.props.toggleIsFetching(true)
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(data.items)
          })
  }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      currentPage={this.props.currentPage}
                      isFetching={this.props.isFetching}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        follow: state.usersPage.follow,
        unfollow: state.usersPage.unfollow,

    }
}
export default connect(mapStateToProps,
    {setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, follow, unfollow})(UsersContainer);
