import React, { useState } from 'react';
import './entry.style.css';

import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from '../../components/login/login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp'

export const Entry = () => {
    const [formLoad, setFormLoad] = useState('login');

    const handleOnResetSubmit = (e) => {
        e.preventDefault();
    }

    const formSwitcher = (formType) => {
        setFormLoad(formType);
    }

    return(
        <div className="entry-page bg-info">
           <Jumbotron className="form-box">
               {(formLoad === 'login') ? <LoginForm 
                formSwitcher={formSwitcher}
               /> : ''}
               {(formLoad === 'reset') ? <ResetPassword 
                // handleOnChange={handleOnChange} 
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                // email={email}
               /> : ''}
           </Jumbotron>
        </div>
    )
}