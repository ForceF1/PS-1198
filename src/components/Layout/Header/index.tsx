import React from 'react';
import {Flex, Input, useCSS} from "@fluentui/react-northstar";


export default () => {
    const styles = useCSS({
        background: '#374598',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: 15
    });

    return (
        <Flex>
            <Flex.Item>
                <div className={styles}>
                    <Input placeholder="Search..." />
                </div>
            </Flex.Item>
        </Flex>
    )
}
