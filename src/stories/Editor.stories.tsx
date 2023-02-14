import { ComponentStory, ComponentMeta } from "@storybook/react";
import Editor from "../editor";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Editor",
    component: Editor,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        color: "color",
    },
} as ComponentMeta<typeof Editor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Editor> = args => <Editor {...args} />;

export const EditorSimple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EditorSimple.args = {
    color: "color",
};
