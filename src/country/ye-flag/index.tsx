import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const YeFlagSource = require('./ye.webp');

export default function YeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={YeFlagSource} />;
}
