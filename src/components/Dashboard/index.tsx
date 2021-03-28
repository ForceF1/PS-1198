import React from 'react';
import {Route} from 'react-router-dom';
import {Flex} from "@fluentui/react-northstar";
import SubMenu from './SubMenu';

export default () => {
    return (
        <Flex column fill>
            <SubMenu />
        </Flex>
    )
}
