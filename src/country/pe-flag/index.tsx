import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PeFlagSource = require('./pe.webp');

export default function PeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PeFlagSource} />;
}
