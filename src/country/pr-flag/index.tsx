import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PrFlagSource = require('./pr.webp');

export default function PrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PrFlagSource} />;
}
