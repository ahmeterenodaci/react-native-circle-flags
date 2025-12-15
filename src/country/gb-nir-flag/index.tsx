import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GbNirFlagSource = require('./gb-nir.webp');

export default function GbNirFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GbNirFlagSource} />;
}
