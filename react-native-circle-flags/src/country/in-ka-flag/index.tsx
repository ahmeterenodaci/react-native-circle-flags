import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const InKaFlagSource = require('./in-ka.webp');

export default function InKaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={InKaFlagSource} />;
}
