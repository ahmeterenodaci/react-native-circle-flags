import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PfFlagSource = require('./pf.webp');

export default function PfFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PfFlagSource} />;
}
