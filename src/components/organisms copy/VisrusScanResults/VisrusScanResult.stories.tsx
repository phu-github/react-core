import { ComponentMeta, ComponentStory } from "@storybook/react";
import { VisrusScanResult } from "./VisrusScanResult";

export default{
    title:'Organisms/Visrus Scan Result',
    Component: VisrusScanResult
} as ComponentMeta<typeof VisrusScanResult>;

export const Primary: ComponentStory<typeof VisrusScanResult> = (args) => {
    return(
        <VisrusScanResult>
            
        </VisrusScanResult>
    )
}
