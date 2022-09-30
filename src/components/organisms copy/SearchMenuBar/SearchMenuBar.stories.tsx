import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";
import { SearchMenuBar } from "./SearchMenuBar";

export default {
    title: 'Organisms/SearchMenuBar',
    component: SearchMenuBar
} as ComponentMeta<typeof SearchMenuBar>;

const Template: ComponentStory<typeof SearchMenuBar> = (args) => <SearchMenuBar {...args} />


export const Primary = Template.bind({});
Primary.args = {

};

