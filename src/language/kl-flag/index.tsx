import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KlFlagSource = require('./kl.webp');

export default function KlFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KlFlagSource} />;
}
