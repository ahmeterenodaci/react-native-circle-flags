import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GbConFlagSource = require('./gb-con.webp');

export default function GbConFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GbConFlagSource} />;
}
