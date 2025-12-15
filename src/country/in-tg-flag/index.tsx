import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const InTgFlagSource = require('./in-tg.webp');

export default function InTgFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={InTgFlagSource} />;
}
