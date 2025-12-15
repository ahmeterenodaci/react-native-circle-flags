import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const DaFlagSource = require('./da.webp');

export default function DaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={DaFlagSource} />;
}
