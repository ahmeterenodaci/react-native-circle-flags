import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GwFlagSource = require('./gw.webp');

export default function GwFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GwFlagSource} />;
}
