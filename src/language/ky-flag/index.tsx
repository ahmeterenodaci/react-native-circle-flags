import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KyFlagSource = require('./ky.webp');

export default function KyFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KyFlagSource} />;
}
