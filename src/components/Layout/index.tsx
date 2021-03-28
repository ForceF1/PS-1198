import * as React from 'react';
import {Flex, useCSS} from '@fluentui/react-northstar';
import Header from './Header';
import SideMenu from './SideMenu';
import { ContentBlock } from '../../containers';


export default () => {
    const mainLayoutStyles = useCSS({
        height: 'calc(100vh - 62px)'
    });

    return (
        <>
            <Header/>
            <Flex className={mainLayoutStyles}>
                <Flex.Item>
                    <SideMenu />
                </Flex.Item>
                <Flex.Item>
                    <ContentBlock />
                </Flex.Item>
            </Flex>
        </>
    )
}
