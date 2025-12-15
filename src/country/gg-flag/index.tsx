import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GgFlagSource = require('./gg.webp');

export default function GgFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GgFlagSource} />;
}
