import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsAlFlagSource = require('./us-al.webp');

export default function UsAlFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsAlFlagSource} />;
}
