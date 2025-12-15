import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const VeFlagSource = require('./ve.webp');

export default function VeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={VeFlagSource} />;
}
