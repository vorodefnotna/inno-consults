import React, { useRef, useState, useContext } from 'react';
import { useNavigate }                         from 'react-router-dom';
import { AppContext }                          from '../../App';
import Button                                  from '../ui/Button';
import Input                                   from '../ui/Input';
import Checkbox                                from '../ui/Checkbox';

import './authorization.scss';

const FAKE_USER = [
  {
    email: 'erikkhasanov@yandex.ru',
    password: '12345678'
  },
  {
    email: 'roman.kobeev@mail.ru',
    password: '12345678'
  }
]

const Index = () => {
  const navigate = useNavigate();
  const {setUser, setIsAccess} = useContext(AppContext)

  const [error, setError] = useState( null );

  const emailRef = useRef( null );
  const passwordRef = useRef( null );
  const checkBoxRef = useRef( null );

  const submitHandler = ( e ) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const checkboxValue = checkBoxRef.current.checked;

    if ( !emailValue || !passwordValue ) {
      setError( 'Одно из полей пустое' );
      return;
    }

    if ( !checkboxValue ) {
      setError( 'Вы не согласились с условиями' );
      return;
    }

    let isVerified;
    FAKE_USER.forEach(user => {
      if(emailValue === user.email && passwordValue === user.password){
        isVerified = true
      }
    })

    if ( !isVerified ) {
      setError( 'Логин или пароль неверный' );
      return;
    }
    setUser(emailValue)
    setIsAccess(true)
    navigate( '/catalog/' );
  };

  return (
    <div className="authorization">
      <div className="authorization_window">
        <div className="authorization_title">
          <h1>Вход</h1>
          {error && <div className="error-box">{error}</div>}
        </div>
        <form onSubmit={submitHandler}>
          <div className="authorization_input">
            <Input ref={emailRef} id="email" placeHolder="Email"/>
          </div>
          <div className="authorization_input">
            <Input ref={passwordRef} id="password" placeHolder="Password"/>
          </div>
          <div className="authorization_input">
            <Checkbox ref={checkBoxRef} label="Я согласен получать обновления на почту"/>
          </div>
          <div className="authorization_button">
            <Button type="submit" label="Войти"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;