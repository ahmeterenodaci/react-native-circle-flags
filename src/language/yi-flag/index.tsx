import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const YiFlagSource = require('./yi.webp');

export default function YiFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={YiFlagSource} />;
}
