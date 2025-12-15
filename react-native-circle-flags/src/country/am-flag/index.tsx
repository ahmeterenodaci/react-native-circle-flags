import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AmFlagSource = require('./am.webp');

export default function AmFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AmFlagSource} />;
}
