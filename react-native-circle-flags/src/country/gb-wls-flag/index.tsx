import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GbWlsFlagSource = require('./gb-wls.webp');

export default function GbWlsFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GbWlsFlagSource} />;
}
