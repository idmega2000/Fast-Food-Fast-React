import React from 'react';
import { render } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import Router from './App';
import 'react-toastify/dist/ReactToastify.css';

render(<div><Router /><ToastContainer /></div>, document.getElementById('root'));
