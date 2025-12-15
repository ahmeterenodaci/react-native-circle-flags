import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HrFlagSource = require('./hr.webp');

export default function HrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={HrFlagSource} />;
}
