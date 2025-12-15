import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HtFlagSource = require('./ht.webp');

export default function HtFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={HtFlagSource} />;
}
