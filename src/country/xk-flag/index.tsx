import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const XkFlagSource = require('./xk.webp');

export default function XkFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={XkFlagSource} />;
}
