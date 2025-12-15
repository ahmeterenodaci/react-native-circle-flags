import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EeFlagSource = require('./ee.webp');

export default function EeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EeFlagSource} />;
}
