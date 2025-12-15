import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AtFlagSource = require('./at.webp');

export default function AtFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AtFlagSource} />;
}
