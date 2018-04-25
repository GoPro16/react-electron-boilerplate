import React from 'react';

export const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'GoPro16'
        };
    }

    render() {
        return (
            <AuthContext.Provider
                value={{
                    state: this.state,
                    updateUserName: (e) => this.setState({userName:e.target.value})
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}