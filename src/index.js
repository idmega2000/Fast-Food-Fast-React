import React from 'react';
import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import Router from './App';
import 'react-toastify/dist/ReactToastify.css';
import decodeUserToken from './helpers/decodeUserToken';

const user = decodeUserToken();

render(<div><Router user={user} /><ToastContainer /></div>, document.getElementById('root'));
