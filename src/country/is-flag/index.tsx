import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IsFlagSource = require('./is.webp');

export default function IsFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={IsFlagSource} />;
}
