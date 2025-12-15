import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SqFlagSource = require('./sq.webp');

export default function SqFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SqFlagSource} />;
}
