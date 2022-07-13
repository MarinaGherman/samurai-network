import React from 'react';
import {Col, Row} from "antd";
import logo from './images/logo.png'
import s from './Header.module.scss'


const Header = () => {
    return (
        <div className={s.header}>
        <Row>
            <Col span={6}>
                <div className={s.logo}>
                    <img src={logo} alt="logo"/>
                </div>
            </Col>
            <Col span={12}>
               <Row>
                   <Col span={8}>Profile</Col>
                   <Col span={8}>Dialogs</Col>
                   <Col span={8}>Users</Col>
               </Row>
            </Col>
            <Col span={6}>
                <div>login</div>
            </Col>
        </Row>
            
        </div>
    );
};

export default Header;