import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InboxHeaders } from "./InboxHeaders";

export default{
    title:'organisms/Inbox Header',
    component: InboxHeaders,
} as ComponentMeta<typeof InboxHeaders>

export const Primary: ComponentStory<typeof InboxHeaders> = () => {
    return (
        <InboxHeaders>
          
        </InboxHeaders>
    )
}