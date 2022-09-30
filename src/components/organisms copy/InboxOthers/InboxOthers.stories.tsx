import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InboxOthers } from "./InboxOthers";

export default {
    title:'organisms/Inbox Others',
    component: InboxOthers
} as ComponentMeta<typeof InboxOthers>;

export const Primary: ComponentStory<typeof InboxOthers> = () => {
    return (
        <InboxOthers>
            
        </InboxOthers>
    )
}