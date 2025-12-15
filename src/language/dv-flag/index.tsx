import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const DvFlagSource = require('./dv.webp');

export default function DvFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={DvFlagSource} />;
}
