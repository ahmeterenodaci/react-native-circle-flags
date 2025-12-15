import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LaFlagSource = require('./la.webp');

export default function LaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={LaFlagSource} />;
}
