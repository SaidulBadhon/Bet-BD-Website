import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Box } from '@material-ui/core';


import "./TopEarnedUsers.css"


class UserItem extends Component {


    render() {

        const thumbnailPicture = this.props.thumbnail;

        const title = this.props.title;
        const firstName = this.props.firstName;
        const lastName = this.props.lastName;

        const FullName = title + ". " + firstName + " " + lastName

        return (
            <Fragment>

                <div className="UserAvatar">
                    <img src={thumbnailPicture} alt="User IMG" />

                    <h5>{FullName}</h5>
                </div>

            </Fragment>
        )
    }


}

export default UserItem;