import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BqBoFlagSource = require('./bq-bo.webp');

export default function BqBoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={BqBoFlagSource} />;
}
