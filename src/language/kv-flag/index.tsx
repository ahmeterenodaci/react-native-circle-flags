import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KvFlagSource = require('./kv.webp');

export default function KvFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KvFlagSource} />;
}
