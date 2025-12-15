import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsTnFlagSource = require('./us-tn.webp');

export default function UsTnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsTnFlagSource} />;
}
