import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const DkFlagSource = require('./dk.webp');

export default function DkFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={DkFlagSource} />;
}
