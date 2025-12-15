import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LoFlagSource = require('./lo.webp');

export default function LoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={LoFlagSource} />;
}
