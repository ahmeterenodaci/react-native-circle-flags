import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GtFlagSource = require('./gt.webp');

export default function GtFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GtFlagSource} />;
}
