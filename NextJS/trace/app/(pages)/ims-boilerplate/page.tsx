'use client';

import { Col, Layout, Row, Space, Typography } from 'antd';
import Image from 'next/image';
import React from 'react';

import antd from '../../../public/assets/images/antd.svg';
import axios from '../../../public/assets/images/axios.svg';
import eslint from '../../../public/assets/images/eslint.svg';
import jest from '../../../public/assets/images/jest.svg';
import nextJS from '../../../public/assets/images/nextjs.png';
import prettier from '../../../public/assets/images/prettier.svg';
import reduxPng from '../../../public/assets/images/redux.svg';

const { Title } = Typography;
const { Content } = Layout;
export default class Home extends React.Component {
    render() {
        return (
            <Layout data-testid="test-page">
                {/* <Row>
                    <Col style={{ backgroundColor: 'red' }} span={18} push={6}>
                        col-18 col-push-6
                    </Col>
                    <Col style={{ backgroundColor: 'green' }} span={6} pull={18}>
                        col-6 col-pull-18
                    </Col>
                </Row> */}
                <Row>
                    <Col span={24}>
                        <Content style={{ padding: '0 50px' }}>
                            <Row gutter={[24, 32]}>
                                <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                                    <Col span={24}>
                                        <Title> P&G IMS NextJS Boilerplate </Title>
                                    </Col>
                                </Space>
                            </Row>
                            <Row gutter={[26, 32]}>
                                <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                                    <Col span={24}>
                                        <Title level={3}>Built With</Title>
                                    </Col>
                                </Space>
                            </Row>
                            <Row gutter={[12, 16]}>
                                <Col span={6} style={{ textAlign: 'center' }}>
                                    <div>
                                        <Image src={nextJS} alt="" width={70} height={70} />
                                    </div>
                                    <div>
                                        <Title level={5}>NextJS</Title>
                                    </div>
                                </Col>
                                <Col span={6} style={{ textAlign: 'center' }}>
                                    <div>
                                        <Image src={antd} alt="" width={70} height={70} />
                                    </div>
                                    <div>
                                        <Title level={5}>Ant Design</Title>
                                    </div>
                                </Col>{' '}
                                <Col span={6} style={{ textAlign: 'center' }}>
                                    <div>
                                        <Image src={antd} alt="" width={70} height={70} />
                                    </div>
                                    <div>
                                        <Title level={5}>SASS</Title>
                                    </div>
                                </Col>{' '}
                                <Col span={6} style={{ textAlign: 'center' }}>
                                    <div>
                                        <Image src={reduxPng} alt="" width={70} height={70} />
                                    </div>
                                    <div>
                                        <Title level={5}>Redux Toolkit</Title>
                                    </div>
                                </Col>
                                <Col span={6} style={{ textAlign: 'center' }}>
                                    <div>
                                        <Image src={axios} alt="" width={70} height={70} />
                                    </div>
                                    <div>
                                        <Title level={5}>Axios</Title>
                                    </div>
                                </Col>{' '}
                                <Col span={6} style={{ textAlign: 'center' }}>
                                    <div>
                                        <Image src={jest} alt="" width={70} height={70} />
                                    </div>
                                    <div>
                                        <Title level={5}>Jest</Title>
                                    </div>
                                </Col>{' '}
                                <Col span={6} style={{ textAlign: 'center' }}>
                                    <div>
                                        <Image src={eslint} alt="" width={70} height={70} />
                                    </div>
                                    <div>
                                        <Title level={5}>Eslint</Title>
                                    </div>
                                </Col>
                                <Col span={6} style={{ textAlign: 'center' }}>
                                    <div>
                                        <Image src={prettier} alt="" width={70} height={70} />
                                    </div>
                                    <div>
                                        <Title level={5}>Prettier</Title>
                                    </div>
                                </Col>
                            </Row>
                        </Content>
                    </Col>
                </Row>
            </Layout>
        );
    }
}
