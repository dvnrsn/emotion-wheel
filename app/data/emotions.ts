import { Emotion } from '~/types';

export const emotions: Emotion[] = [
  {
    name: 'anger',
    emoji: '😠',
    type: 'primary',
    color: 'var(--anger)',
    from: 'hsl(336.2, 82.1%, 75.9%)',
    to: 'hsl(304.9, 25.2%, 71.2%)',
    nested: [
      {
        name: 'rage',
        type: 'secondary',
        nested: [
          { name: 'hate', type: 'tertiary' },
          { name: 'hostile', type: 'tertiary' },
        ],
      },
      {
        name: 'exasperated',
        type: 'secondary',
        nested: [
          { name: 'frustrated', type: 'tertiary' },
          { name: 'annoyed', type: 'tertiary' },
        ],
      },
      {
        name: 'irritable',
        type: 'secondary',
        nested: [
          { name: 'agitated', type: 'tertiary' },
          { name: 'resentful', type: 'tertiary' },
        ],
      },
      {
        name: 'envy',
        type: 'secondary',
        nested: [
          { name: 'resentful', type: 'tertiary' },
          { name: 'jealous', type: 'tertiary' },
        ],
      },
      {
        name: 'disgust',
        type: 'secondary',
        nested: [
          { name: 'contempt', type: 'tertiary' },
          { name: 'revolted', type: 'tertiary' },
        ],
      },
    ],
  },
  {
    name: 'fear',
    emoji: '😨',
    type: 'primary',
    color: 'var(--fear)',
    from: 'lch(81.91% 31.85 43.34)',
    to: 'lch(76.03% 36.73 8.75)',
    nested: [
      {
        name: 'scared',
        type: 'secondary',
        nested: [
          { name: 'helpless', type: 'tertiary' },
          { name: 'frightened', type: 'tertiary' },
        ],
      },
      {
        name: 'terror',
        type: 'secondary',
        nested: [
          { name: 'hysterical', type: 'tertiary' },
          { name: 'panic', type: 'tertiary' },
        ],
      },
      {
        name: 'insecure',
        type: 'secondary',
        nested: [
          { name: 'inferior', type: 'tertiary' },
          { name: 'inadequate', type: 'tertiary' },
        ],
      },
      {
        name: 'nervous',
        type: 'secondary',
        nested: [
          { name: 'worried', type: 'tertiary' },
          { name: 'anxious', type: 'tertiary' },
        ],
      },
      {
        name: 'horror',
        type: 'secondary',
        nested: [
          { name: 'mortified', type: 'tertiary' },
          { name: 'dread', type: 'tertiary' },
        ],
      },
    ],
  },
  {
    name: 'sadness',
    emoji: '😔',
    type: 'primary',
    color: 'var(--sadness)',
    from: 'lch(76.45% 17.98 298.39)',
    to: 'lch(88.75% 11.28 206.73)',
    nested: [
      {
        name: 'suffering',
        type: 'secondary',
        nested: [
          { name: 'agony', type: 'tertiary' },
          { name: 'hurt', type: 'tertiary' },
        ],
      },
      {
        name: 'sadness',
        type: 'secondary',
        nested: [
          { name: 'depressed', type: 'tertiary' },
          { name: 'sorrow', type: 'tertiary' },
        ],
      },
      {
        name: 'disappointed',
        type: 'secondary',
        nested: [
          { name: 'dismayed', type: 'tertiary' },
          { name: 'displeased', type: 'tertiary' },
        ],
      },
      {
        name: 'shameful',
        type: 'secondary',
        nested: [
          { name: 'regretful', type: 'tertiary' },
          { name: 'guilty', type: 'tertiary' },
        ],
      },
      {
        name: 'neglected',
        type: 'secondary',
        nested: [
          { name: 'isolated', type: 'tertiary' },
          { name: 'lonely', type: 'tertiary' },
        ],
      },
      {
        name: 'despair',
        type: 'secondary',
        nested: [
          { name: 'grief', type: 'tertiary' },
          { name: 'powerless', type: 'tertiary' },
        ],
      },
    ],
  },
  {
    name: 'joy',
    type: 'primary',
    emoji: '😂',
    color: 'var(--joy)',
    from: 'lch(86.92% 25.85 138.38)',
    to: 'lch(96.17% 24.33 105.49)',
    nested: [
      {
        name: 'content',
        type: 'secondary',
        nested: [
          { name: 'pleased', type: 'tertiary' },
          { name: 'satisfied', type: 'tertiary' },
        ],
      },
      {
        name: 'happy',
        type: 'secondary',
        nested: [
          { name: 'amused', type: 'tertiary' },
          { name: 'delighted', type: 'tertiary' },
        ],
      },
      {
        name: 'cheerful',
        type: 'secondary',
        nested: [
          { name: 'jovial', type: 'tertiary' },
          { name: 'blissful', type: 'tertiary' },
        ],
      },
      {
        name: 'proud',
        type: 'secondary',
        nested: [
          { name: 'triumphant', type: 'tertiary' },
          { name: 'illustrious', type: 'tertiary' },
        ],
      },
      {
        name: 'optimistic',
        type: 'secondary',
        nested: [
          { name: 'hopeful', type: 'tertiary' },
          { name: 'eager', type: 'tertiary' },
        ],
      },
      {
        name: 'enthusiastic',
        type: 'secondary',
        nested: [
          { name: 'zeal', type: 'tertiary' },
          { name: 'excited', type: 'tertiary' },
        ],
      },
      {
        name: 'elation',
        type: 'secondary',
        nested: [
          { name: 'jubilation', type: 'tertiary' },
          { name: 'euphoric', type: 'tertiary' },
        ],
      },
      {
        name: 'enthralled',
        type: 'secondary',
        nested: [
          { name: 'rapture', type: 'tertiary' },
          { name: 'enchanted', type: 'tertiary' },
        ],
      },
    ],
  },
  {
    name: 'love',
    emoji: '😍',
    type: 'primary',
    color: 'var(--love)',
    from: 'lch(96.17% 24.33 105.49)',
    to: 'lch(86.71% 29.37 65.32)',
    nested: [
      {
        name: 'affectionate',
        type: 'secondary',
        nested: [
          { name: 'fondness', type: 'tertiary' },
          { name: 'romantic', type: 'tertiary' },
        ],
      },
      {
        name: 'longing',
        type: 'secondary',
        nested: [
          { name: 'attracted', type: 'tertiary' },
          { name: 'sentimental', type: 'tertiary' },
        ],
      },
      {
        name: 'desire',
        type: 'secondary',
        nested: [
          { name: 'infatuation', type: 'tertiary' },
          { name: 'passion', type: 'tertiary' },
        ],
      },
      {
        name: 'tenderness',
        type: 'secondary',
        nested: [
          { name: 'compassionate', type: 'tertiary' },
          { name: 'caring', type: 'tertiary' },
        ],
      },
      {
        name: 'peaceful',
        type: 'secondary',
        nested: [
          { name: 'satisfied', type: 'tertiary' },
          { name: 'relieved', type: 'tertiary' },
        ],
      },
    ],
  },
  {
    name: 'surprise',
    emoji: '😲',
    type: 'primary',
    color: 'var(--surprise)',
    from: 'lch(90.04% 13.61 205.23)',
    to: 'lch(87.53% 17.83 163.58)',
    nested: [
      {
        name: 'stunned',
        type: 'secondary',
        nested: [
          { name: 'shocked', type: 'tertiary' },
          { name: 'dismayed', type: 'tertiary' },
        ],
      },
      {
        name: 'confused',
        type: 'secondary',
        nested: [
          { name: 'disillusioned', type: 'tertiary' },
          { name: 'perplexed', type: 'tertiary' },
        ],
      },
      {
        name: 'amazed',
        type: 'secondary',
        nested: [
          { name: 'astonished', type: 'tertiary' },
          { name: 'awe-struck', type: 'tertiary' },
        ],
      },
      {
        name: 'overcome',
        type: 'secondary',
        nested: [
          { name: 'speechless', type: 'tertiary' },
          { name: 'astounded', type: 'tertiary' },
        ],
      },
      {
        name: 'moved',
        type: 'secondary',
        nested: [
          { name: 'stimulated', type: 'tertiary' },
          { name: 'touched', type: 'tertiary' },
        ],
      },
    ],
  },
];
