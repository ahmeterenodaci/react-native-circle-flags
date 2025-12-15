import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SiFlagSource = require('./si.webp');

export default function SiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SiFlagSource} />;
}
