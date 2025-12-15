import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KuFlagSource = require('./ku.webp');

export default function KuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KuFlagSource} />;
}
