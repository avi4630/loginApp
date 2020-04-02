import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import MyLoginBox from './component/myInnerSqure';

import MyLogin from './component/myUseReducer';

ReactDOM.render(
  <div>
  <MyLogin/>
</div>,
 // <MyLoginBox/>,
  document.getElementById('root')
);
