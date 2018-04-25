import React from 'react';
import { AuthProvider } from 'store/Auth';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../Home';


const App = () => (
    <AuthProvider>
        <BrowserRouter>
                <React.Fragment>
                <Route exact path="/" component={Home} />
                </React.Fragment> 
        </BrowserRouter>
    </AuthProvider>
);
export default App;
