import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CfFlagSource = require('./cf.webp');

export default function CfFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CfFlagSource} />;
}
