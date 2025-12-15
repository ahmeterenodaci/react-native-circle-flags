import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ThFlagSource = require('./th.webp');

export default function ThFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ThFlagSource} />;
}
