import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TjFlagSource = require('./tj.webp');

export default function TjFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={TjFlagSource} />;
}
