import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CnFlagSource = require('./cn.webp');

export default function CnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CnFlagSource} />;
}
