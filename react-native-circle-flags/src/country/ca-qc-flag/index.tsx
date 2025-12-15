import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CaQcFlagSource = require('./ca-qc.webp');

export default function CaQcFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CaQcFlagSource} />;
}
