import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AqFlagSource = require('./aq.webp');

export default function AqFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AqFlagSource} />;
}
