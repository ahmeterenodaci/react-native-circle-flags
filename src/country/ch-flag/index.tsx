import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ChFlagSource = require('./ch.webp');

export default function ChFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ChFlagSource} />;
}
