import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CdFlagSource = require('./cd.webp');

export default function CdFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CdFlagSource} />;
}
