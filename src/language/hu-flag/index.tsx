import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HuFlagSource = require('./hu.webp');

export default function HuFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={HuFlagSource} />;
}
