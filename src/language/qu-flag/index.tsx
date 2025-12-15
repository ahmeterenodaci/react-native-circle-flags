import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const QuFlagSource = require('./qu.webp');

export default function QuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={QuFlagSource} />;
}
