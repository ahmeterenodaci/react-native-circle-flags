import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UaBprFlagSource = require('./ua-bpr.webp');

export default function UaBprFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UaBprFlagSource} />;
}
