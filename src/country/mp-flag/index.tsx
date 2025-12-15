import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MpFlagSource = require('./mp.webp');

export default function MpFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MpFlagSource} />;
}
