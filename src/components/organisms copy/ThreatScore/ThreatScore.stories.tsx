import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThreatScore } from "./ThreatScore";

export default {
    title: 'Organisms/Threat Score',
    Component: ThreatScore
}as ComponentMeta<typeof ThreatScore>;

export const Template: ComponentStory<typeof ThreatScore> = (args) => {
return (
    <ThreatScore>
       
    </ThreatScore>
)
}