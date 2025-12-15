import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsCoFlagSource = require('./us-co.webp');

export default function UsCoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsCoFlagSource} />;
}
