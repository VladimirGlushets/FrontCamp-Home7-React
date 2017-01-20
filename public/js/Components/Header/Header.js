import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { user } = this.props;

        return (
            <div className="header-container">
                <div className="wrapper">
                    <div className="header-content">
                        <div className="logo">
                            <a href="https://nodejs.org/">Powered by NodeJs and React</a>
                        </div>
                    </div>
                    {user ? (
                        <div className="welcome-user">
                            Welcome, { user }
                        </div>
                    ) : ''}
                </div>
            </div>
        );
    }
}
