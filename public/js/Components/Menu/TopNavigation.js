import React from 'react';
import classNames from 'classnames';

export default class TopNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { user } = this.props;

        return (
            <nav className="navbar" role="navigation">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
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
