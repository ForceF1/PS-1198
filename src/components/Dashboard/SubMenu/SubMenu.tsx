import React from 'react';
import {Flex, Header, Segment} from '@fluentui/react-northstar'

type SubMenuContentType = {
    title: string,
    items: Array<string>
}

const contentItems = [
    {
        title: "My Career and Benefits",
        items: [
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4",
            "Item 5",
        ]
    },
    {
        title: "Travel",
        items: [
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4",
            "Item 5",
        ]
    },
];


const ContentItem = ({title, items}: SubMenuContentType) => (
        <>
            <Header as="h3" content={title} />
            <div>
                {items && items.map(item => (
                    <div style={{padding: '10px 0'}}>{item}</div>
                ))}
            </div>
        </>
);


const content = contentItems.map( (item, index) => {
    return <ContentItem title={item.title} items={item.items}/>
});

export default () => (
    <Segment styles={{ boxShadow: 'none'}}>
        <Flex>
            <Flex gap="gap.small" padding="padding.medium" column styles={{ minWidth: '20vw'}}>
                {content}
            </Flex>
            <Flex gap="gap.small" padding="padding.medium" column styles={{ minWidth: '20vw'}}>
                {content}
            </Flex>
        </Flex>
    </Segment>
)
