import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PtFlagSource = require('./pt.webp');

export default function PtFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PtFlagSource} />;
}
