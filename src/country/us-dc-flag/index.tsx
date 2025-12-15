import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsDcFlagSource = require('./us-dc.webp');

export default function UsDcFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsDcFlagSource} />;
}
