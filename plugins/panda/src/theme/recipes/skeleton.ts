import { defineRecipe } from '@pandacss/dev'

export const skeleton = defineRecipe({
  className: 'skeleton',
  base: {
    animation: 'skeleton-pulse',
    backgroundClip: 'padding-box',
    bg: 'bg.emphasized',
    borderRadius: 'l3',
    color: 'transparent',
    cursor: 'default',
    pointerEvents: 'none',
    userSelect: 'none',
    '&::before, &::after, *': {
      visibility: 'hidden',
    },
  },
})
