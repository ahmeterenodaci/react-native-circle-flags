import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CqFlagSource = require('./cq.webp');

export default function CqFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CqFlagSource} />;
}
