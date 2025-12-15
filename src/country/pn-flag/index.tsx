import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PnFlagSource = require('./pn.webp');

export default function PnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PnFlagSource} />;
}
