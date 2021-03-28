import React from 'react';
import { ReactMegaMenu } from 'react-mega-menu';
import {Flex, Menu, MenuIcon, Provider} from '@fluentui/react-northstar';

import SubMenuContent from './SubMenu';

const menuStyles = {
    containerProps: {
        style: {
            position: 'relative',
            background: '#f3f2f1',
        }
    },
    menuProps: {
        style: {
            margin: "0",
            border: 'none'
        }
    },
    contentProps: {
        style: {
            padding: "2px",
        }
    },
    menuItemProps: {
        style: {
            lineHeight: 2,
            padding: '10px 50px 10px 20px',
            minWidth: 220
        }
    },
    menuItemSelectedProps: {
        style: {
            lineHeight: 2,
            backgroundColor: "#fff",
            padding: '10px 50px 10px 20px',
            minWidth: 220
        }
    }

};

const dropdownContent = Array.from(Array(4)).map( (item, index) => {
    return {
        label: `Sub Menu Item ${index + 1}`,
        key: index,
        items: <SubMenuContent />
    }
});


const menuItems = [
    {
        key: 'editorials',
        content: 'Editorials',
        menu:
            <ReactMegaMenu
                styleConfig={menuStyles}
                data={dropdownContent}
            />,
        on: 'hover' as 'hover',
    },
    {
        key: 'review',
        content: 'Reviews',
        menu:
            <ReactMegaMenu
                styleConfig={menuStyles}
                data={dropdownContent}
            />,
        on: 'hover' as 'hover'
    },
    {
        key: 'events',
        content: 'Upcoming Events',
        menu:
            <ReactMegaMenu
                styleConfig={menuStyles}
                data={dropdownContent}
            />,
    },
];

export default () => {
    const menuMainStyles = {
        componentStyles: {
            Menu: {
                root: {
                    border: 'none',
                    padding: 0,
                }
            },
            MenuItem: {
                root: {
                    paddingLeft: '10px',
                    paddingRight: '10px',
                }
            },
            MenuItemWrapper: {
                root: {
                    boxShadow: 'none'
                }
            },
            MenuItemIndicator: {
                root: {
                    display: 'none' as 'none'
                }
            },
            MenuDivider: {
                root: {
                    display: 'none' as 'none'
                }
            },
            MenuItemContent: {
                root: {
                    top: '50px'
                }
            }
        }
    };

    return (
        <Provider theme={menuMainStyles}>
            <Flex vAlign="center" gap="gap.medium">
                <MenuIcon />
                <Menu defaultActiveIndex={0} items={menuItems} />
            </Flex>
        </Provider>
    )
}
