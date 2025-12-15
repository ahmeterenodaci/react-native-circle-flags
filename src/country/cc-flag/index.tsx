import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CcFlagSource = require('./cc.webp');

export default function CcFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CcFlagSource} />;
}
