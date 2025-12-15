import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ClFlagSource = require('./cl.webp');

export default function ClFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={ClFlagSource} />;
}
