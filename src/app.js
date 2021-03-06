import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import DespreNoi from './pages/DespreNoi';
import Portofoliu from './pages/Portofoliu';
import Contact from './pages/Contact';
import Tsc from './pages/Tsc';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './style.css';
import Servicii from './pages/Preturi';
import Loading from './pages/Loading';

export default function App(){
    return (
       <div>
        <MessengerCustomerChat
    pageId="100433175248922 "
    appId="832126954287841"
    htmlRef="https://connect.facebook.net/ro_RO/sdk/xfbml.customerchat.js"
    language="ro"
        />
       <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/desprenoi">
                    <DespreNoi/>
                </Route>
                <Route path="/portofoliu">
                    <Portofoliu/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/termeni-si-conditii">
                    <Tsc/>
                </Route>
                <Route path="/servicii">
                    <Servicii/>
                </Route>
                <Route path="/loading">
                    <Loading/>
                </Route>
            </Switch>
       </Router>
       </div>
    )
}