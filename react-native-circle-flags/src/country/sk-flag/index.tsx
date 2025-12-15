import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SkFlagSource = require('./sk.webp');

export default function SkFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SkFlagSource} />;
}
