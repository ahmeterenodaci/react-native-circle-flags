import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const McFlagSource = require('./mc.webp');

export default function McFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={McFlagSource} />;
}
