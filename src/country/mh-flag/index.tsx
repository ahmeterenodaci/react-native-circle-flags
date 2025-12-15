import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MhFlagSource = require('./mh.webp');

export default function MhFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MhFlagSource} />;
}
