type BaseEmotion = {
  name: string;
  emoji?: string;
  type: 'primary' | 'secondary' | 'tertiary';
};

type TertiaryEmotion = BaseEmotion & {
  type: 'tertiary';
};

export type SecondaryEmotion = BaseEmotion & {
  type: 'secondary';
  nested: TertiaryEmotion[];
};

export type Emotion = BaseEmotion & {
  type: 'primary';
  emoji: string;
  color: string;
  from: string;
  to: string;
  nested: SecondaryEmotion[];
};
