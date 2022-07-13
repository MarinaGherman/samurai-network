import React from 'react';
import {Col, Row} from "antd";
import logo from './images/logo.png'
import s from './Header.module.scss'


const Header = () => {
    return (
        <div className={s.header}>
        <Row>
            <Col span={1}>
                <div>
                    <img src={logo} alt=""/>
                </div>
            </Col>
            <Col span={10}>
               <div></div>
            </Col>
            <Col span={1}>
                <div></div>
            </Col>
        </Row>
            
        </div>
    );
};

export default Header;