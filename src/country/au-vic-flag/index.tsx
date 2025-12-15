import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuVicFlagSource = require('./au-vic.webp');

export default function AuVicFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AuVicFlagSource} />;
}
