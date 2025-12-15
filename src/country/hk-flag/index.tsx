import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HkFlagSource = require('./hk.webp');

export default function HkFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={HkFlagSource} />;
}
