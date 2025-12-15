import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GyFlagSource = require('./gy.webp');

export default function GyFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GyFlagSource} />;
}
