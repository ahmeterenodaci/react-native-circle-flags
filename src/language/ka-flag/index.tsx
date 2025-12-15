import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KaFlagSource = require('./ka.webp');

export default function KaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KaFlagSource} />;
}
