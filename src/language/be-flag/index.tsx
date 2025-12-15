import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BeFlagSource = require('./be.webp');

export default function BeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={BeFlagSource} />;
}
