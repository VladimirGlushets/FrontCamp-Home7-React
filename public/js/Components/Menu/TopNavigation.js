import React from 'react';

export default class TopNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { user } = this.props;

        return (
            <nav class="navbar" role="navigation">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        {user ?
                            <a href="/logout">Log Out</a>
                            :
                            <a href="/login">Log In</a>
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}