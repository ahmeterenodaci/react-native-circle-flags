import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KmFlagSource = require('./km.webp');

export default function KmFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KmFlagSource} />;
}
