import {ComponentMeta, ComponentStory} from "@storybook/react";
import {RightInbox} from "./RightInbox";

export default {
    title: 'organisms/RightInbox',
    Component: RightInbox,
} as ComponentMeta<typeof RightInbox>;

const Template: ComponentStory<typeof RightInbox> = (args) => <RightInbox {...args} />

export const Primary = Template.bind({});
Primary.args= {
    width:1243,
    height:1508,
    summaryTitleMessage: 'High priority message',
    subTitle: 'Potential threats',
    bodyMessage:'Potentially malicious and may require further analysis by infosec team',
    backgroundColor:'#D9D9D9',
    inboxDetailData:{
        create_at:'',
        email_id:'',
        subject: 'Subject 2',
        priority: 'Low',
        reported_at: 1660290119,
        reported_by: 'ttrongphu@tma.com.vn',
        email_from: 'ttrongphu@tma.com.vn',
        category: 'Clean',
        status: 'In Review',
        header_content:'',
    }
}

export const Secondary = Template.bind({});
Secondary.args={
    width:1243,
    height:1508,
    bodyMessage:'Potentially malicious and may require further analysis by infosec team',
    backgroundColor:'#D9D9D9',
    inboxDetailData:{
        create_at: '',
        email_id: '',
        subject: 'Subject 2',
        priority: 'Low',
        reported_at: 1660290119,
        reported_by: 'ttrongphu@tma.com.vn',
        email_from: 'ttrongphu@tma.com.vn',
        category: 'Clean',
        status: 'In Review',
        header_content:'',

    }
}




