import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GbSctFlagSource = require('./gb-sct.webp');

export default function GbSctFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GbSctFlagSource} />;
}
