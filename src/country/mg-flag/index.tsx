import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MgFlagSource = require('./mg.webp');

export default function MgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MgFlagSource} />;
}
