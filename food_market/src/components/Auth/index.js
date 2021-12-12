import React from 'react';

import Button   from '../ui/Button';
import Input    from '../ui/Input';

import './authorization.scss'
import Checkbox from '../ui/Checkbox';

const Index = () => {
  return (
    <div className='authorization'>
      <div className='authorization_window'>
        <div className='authorization_title'>
          <h1>Вход</h1>
        </div>
        <form>
          <div className='authorization_input'>
            <Input id='email' placeHolder='Email'/>
          </div>
          <div className='authorization_input'>
            <Input id='password' placeHolder='Password'/>
          </div>
          <div className='authorization_input'>
            <Checkbox label='Я согласен получать обновления на почту'/>
          </div>
          <div className='authorization_button'>
            <Button label='Войти'/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;