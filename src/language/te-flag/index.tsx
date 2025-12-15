import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TeFlagSource = require('./te.webp');

export default function TeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TeFlagSource} />;
}
