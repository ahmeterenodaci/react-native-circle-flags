import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MtFlagSource = require('./mt.webp');

export default function MtFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MtFlagSource} />;
}
