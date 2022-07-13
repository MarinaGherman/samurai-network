import React from 'react';
import s from './Main.module.scss'
import {Col, Row} from "antd";
import Profile from "../Profile/Profile";

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <Row>
                <Col span={6}>
                    <div>Profile</div>
                </Col>
                <Col span={18}>
                    <Profile/>
                </Col>
            </Row>
        </div>
    );
};

export default Main;