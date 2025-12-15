import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CoFlagSource = require('./co.webp');

export default function CoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CoFlagSource} />;
}
