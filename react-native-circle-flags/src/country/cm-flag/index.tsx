import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CmFlagSource = require('./cm.webp');

export default function CmFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CmFlagSource} />;
}
