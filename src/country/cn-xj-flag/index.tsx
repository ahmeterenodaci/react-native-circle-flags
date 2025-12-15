import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CnXjFlagSource = require('./cn-xj.webp');

export default function CnXjFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CnXjFlagSource} />;
}
