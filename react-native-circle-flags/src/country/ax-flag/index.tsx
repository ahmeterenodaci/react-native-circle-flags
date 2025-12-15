import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AxFlagSource = require('./ax.webp');

export default function AxFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AxFlagSource} />;
}
