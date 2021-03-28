import React from 'react';
import {Route} from 'react-router-dom';
import {Flex, Segment} from "@fluentui/react-northstar";

import { HomeMenu, SettingsComponent } from '../../components';
import SubMenu from "../../components/Dashboard";

export default () => {
    const segmentStyles = {
        boxShadow: 'none',
        borderBottom: '1px solid #f3f2f1',
        padding: '0 30px'
    };
    const submenuSegmentStyles = {
        boxShadow: '#80808054 0px 4px 4px -4px',
        padding: '0 30px'
    };

    return (
        <Flex column fill>
            <Segment styles={segmentStyles}>
                <Flex.Item>
                    <HomeMenu />
                </Flex.Item>
            </Segment>
            <Route path="/home/dashboard" exact component={() => (
                <Segment styles={submenuSegmentStyles}>
                    <SubMenu />
                </Segment>
            )} />
            <Route path="/home/settings" exact component={() => (
                <Segment styles={submenuSegmentStyles}>
                    <SettingsComponent />
                </Segment>
            )} />
        </Flex>
    )
}
