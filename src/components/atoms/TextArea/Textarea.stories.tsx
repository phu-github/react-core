import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Textarea } from "./Textarea";

export default {
    title:'Atoms/Textarea',
    component: Textarea,
    argTypes:{
        color:{control: 'color'},
        backgroundColor:{control: 'color'},
        borderColor: {control: 'color'},
        isDisable:{control:'boolean'}
    }
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Primary= Template.bind({});

Primary.args = {
    cols: 1,
    rows: 2,
    borderColor: 'black',
    backgroundColor:'white',
    padding:'4px',
    margin:' 6px',
    width:300,
    height:300,
    value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
}



