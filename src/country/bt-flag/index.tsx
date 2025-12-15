import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BtFlagSource = require('./bt.webp');

export default function BtFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BtFlagSource} />;
}
