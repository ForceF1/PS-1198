import React from 'react';
import {
    Flex,
    Menu,
    useCSS,
    Divider,
    ChatIcon,
    MoreIcon,
    Provider,
    BulletsIcon,
    BookmarkIcon,
    TrashCanIcon,
    SettingsIcon,
    CallVideoIcon,
    TranslationIcon,
    MarkAsUnreadIcon,
    QuestionCircleIcon
} from "@fluentui/react-northstar";
import { Link } from "react-router-dom";



export default () => {
    const dividerStyles = useCSS({
        width: '50%',
        margin: '0 auto'
    });

    const menuStyles = {
        componentStyles: {
            Menu: {
                root: {
                    width: '100%',
                    background: '#f3f2f1'
                }
            },
            MenuItem: {
                root: {
                    padding: '10px',
                    '& a': {
                        textDecoration: 'none',
                        outline: 'none'
                    }
                }
            },
            MenuItemWrapper: {
                root: {
                    textAlign: "center" as "center",
                }
            },
            MenuItemContent: {
                root: {
                    marginRight: 0,
                }
            },
        }
    };

    const items = [
        {
            key: 'side_menu_1',
            content: (
                <Link to="/home/dashboard">
                    <Flex column hAlign="center" vAlign="center" styles={{ marginRight: 0}}>
                        <Flex.Item>
                            <ChatIcon outline size="large"/>
                        </Flex.Item>
                        <Flex.Item>
                            <>Home</>
                        </Flex.Item>
                    </Flex>
                </Link>
            )
        },
        {
            key: 'side_menu_2',
            content:
                <Link to="/some-page">
                    <Flex column hAlign="center" vAlign="center">
                        <Flex.Item>
                            <BulletsIcon outline size="large" />
                        </Flex.Item>
                        <Flex.Item>
                            <>Activity</>
                        </Flex.Item>
                    </Flex>
                </Link>
        },
        {
            key: 'side_menu_3',
            content:
                <Link to="/some-page">
                    <Flex column hAlign="center" vAlign="center">
                        <Flex.Item><CallVideoIcon outline size="large" /></Flex.Item>
                        <Flex.Item><>Menu item 3</></Flex.Item>
                    </Flex>
                </Link>
        },
        {
            key: 'side_menu_4',
            content:
                <Link to="/some-page">
                    <Flex column hAlign="center" vAlign="center">
                        <Flex.Item><ChatIcon outline size="large" /></Flex.Item>
                        <Flex.Item><>Menu item 4</></Flex.Item>
                    </Flex>
                </Link>
        },
        {
            key: 'side_menu_5',
            content:
                <Link to="/some-page">
                    <Flex column hAlign="center" vAlign="center">
                        <Flex.Item><ChatIcon outline size="large" /></Flex.Item>
                        <Flex.Item><>Menu item 5</></Flex.Item>
                    </Flex>
                </Link>
        },
        {
            key: 'side_menu_6',
            content:
                <Link to="/some-page">
                    <Flex column hAlign="center" vAlign="center">
                        <Flex.Item><ChatIcon outline size="large" /></Flex.Item>
                        <Flex.Item><>Menu item 6</></Flex.Item>
                    </Flex>
                </Link>
        },
        {
            icon: (
                <MoreIcon
                    {...{
                        outline: true,
                    }}
                />
            ),
            key: 'menuButton2',
            'aria-label': 'More options',
            indicator: false,
            menu: {
                items: [
                    {
                        key: '5',
                        content: 'item1',
                        icon: <BookmarkIcon outline />,
                    },
                    {
                        key: 'divider',
                        kind: 'divider',
                    },
                    {
                        key: '6',
                        content: 'item2',
                        icon: <MarkAsUnreadIcon outline />,
                    },
                    {
                        key: '7',
                        content: 'item3',
                        disabled: true,
                        icon: <TranslationIcon outline />,
                    },
                    {
                        key: 'divider2',
                        kind: 'divider',
                    },
                    {
                        key: '8',
                        content: 'item3',
                        icon: <TrashCanIcon outline />,
                    },
                ],
            },
        },
        {
            key: 'divider-2',
            kind: 'divider',
            content: <Divider className={dividerStyles}/>
        },
        {
            key: 'side_menu_7',
            content:
                <Link to="/some-page">
                    <Flex column hAlign="center" vAlign="center">
                        <Flex.Item><ChatIcon outline size="large" /></Flex.Item>
                        <Flex.Item><>Chat</></Flex.Item>
                    </Flex>
                </Link>
        },
    ];

    const bottomSideMenuItems = [
        {
            key: 'side_menu_8',
            content:
                <Link to="/some-page">
                    <QuestionCircleIcon outline size="large" />
                </Link>
        },
        {
            key: 'side_menu_9',
            content:
                <Link to="/some-page">
                    <SettingsIcon outline size="large" />
                </Link>
        }
    ];

    return (
        <Flex column>
            <Provider theme={menuStyles}>
                <Menu defaultActiveIndex={0} items={items} vertical pointing />
            </Provider>
            <Flex.Item push>
                <Provider theme={menuStyles}>
                    <Menu items={bottomSideMenuItems} vertical pointing />
                </Provider>
            </Flex.Item>
        </Flex>
    )
}
