import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MdFlagSource = require('./md.webp');

export default function MdFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MdFlagSource} />;
}
