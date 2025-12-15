import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const InGjFlagSource = require('./in-gj.webp');

export default function InGjFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={InGjFlagSource} />;
}
