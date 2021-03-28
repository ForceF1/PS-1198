import React from 'react';
import { NavLink } from 'react-router-dom';
import {Flex, Header, Avatar, MenuButton, Button, MoreIcon, useCSS, EmojiIcon, VideoCameraEmphasisIcon, ExpandIcon} from '@fluentui/react-northstar';

export default () => {
    const menuLinksStyles = useCSS( () =>({
        padding: '30px 0 25px',
        textDecoration: 'none',
        '&.active': {
            borderBottom: `2px solid purple`
        }
    }));
    const moreButtonStyles = useCSS({
        '& .ui-button': {
            padding: 0,
            border: 'none',
            boxShadow: 'none',
            minWidth: 'auto',
            width: 35
        }
    });
    return (
        <Flex vAlign="center" gap="gap.small">
            <Flex gap="gap.small" vAlign="center">
                <Avatar
                    image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/ade.jpg"
                />
                <Header content="Intranet" as="h3" />
            </Flex>
            <Flex gap="gap.small">
                <NavLink to="/home/dashboard" className={menuLinksStyles}>
                    Dashboard
                </NavLink>
                <NavLink to="/home/settings" className={menuLinksStyles}>Settings</NavLink>
            </Flex>
            <Flex.Item push>
                <Flex gap="gap.small">
                    <MenuButton
                        className={moreButtonStyles}
                        trigger={<Button icon={<MoreIcon />} title="Open MenuButton" />}
                        menu={[
                            '1',
                            '2',
                            '3',
                            {
                                content: 'submenu',
                                menu: ['4', '5'],
                            },
                        ]}
                    />
                    <Button circular icon={<EmojiIcon />} title="Emoji" />
                    <MenuButton
                        trigger={<Button icon={<VideoCameraEmphasisIcon />} content="Meet" title="Open MenuButton" />}
                        menu={[
                            '1',
                            '2',
                            '3',
                            {
                                content: 'submenu',
                                menu: ['4', '5'],
                            },
                        ]}
                    />
                </Flex>
            </Flex.Item>
        </Flex>
    )
}
