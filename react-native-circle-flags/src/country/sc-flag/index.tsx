import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ScFlagSource = require('./sc.webp');

export default function ScFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={ScFlagSource} />;
}
