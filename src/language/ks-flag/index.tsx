import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KsFlagSource = require('./ks.webp');

export default function KsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KsFlagSource} />;
}
