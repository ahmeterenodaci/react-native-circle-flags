import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LyFlagSource = require('./ly.webp');

export default function LyFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={LyFlagSource} />;
}
