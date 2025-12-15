import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KhFlagSource = require('./kh.webp');

export default function KhFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KhFlagSource} />;
}
