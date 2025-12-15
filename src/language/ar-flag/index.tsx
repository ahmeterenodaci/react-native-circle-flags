import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ArFlagSource = require('./ar.webp');

export default function ArFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={ArFlagSource} />;
}
