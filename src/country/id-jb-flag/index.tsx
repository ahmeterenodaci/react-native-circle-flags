import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IdJbFlagSource = require('./id-jb.webp');

export default function IdJbFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={IdJbFlagSource} />;
}
