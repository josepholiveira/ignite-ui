import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>This is the Box element</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj = {}
