import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque quasi expedita autem molestiae explicabo ex fuga tempore. Ullam rem reprehenderit, dicta soluta praesentium eligendi repudiandae officiis. Necessitatibus, unde dolor?',
  },
} as Meta<TextProps>

export const Primary: StoryObj = {}

export const CustomTag: StoryObj = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
