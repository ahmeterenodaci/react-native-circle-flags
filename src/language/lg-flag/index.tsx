import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LgFlagSource = require('./lg.webp');

export default function LgFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={LgFlagSource} />;
}
