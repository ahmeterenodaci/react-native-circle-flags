import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MoFlagSource = require('./mo.webp');

export default function MoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MoFlagSource} />;
}
