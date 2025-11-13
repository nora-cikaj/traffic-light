export const LightColor = {
  RED: "red",
  YELLOW: "yellow",
  GREEN: "green",
} as const;

export type LightColorType = typeof LightColor[keyof typeof LightColor] | undefined;
