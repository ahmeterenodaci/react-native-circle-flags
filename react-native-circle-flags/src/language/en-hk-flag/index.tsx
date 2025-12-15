import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnHkFlagSource = require('./en-hk.webp');

export default function EnHkFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EnHkFlagSource} />;
}
