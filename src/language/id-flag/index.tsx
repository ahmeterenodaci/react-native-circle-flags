import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IdFlagSource = require('./id.webp');

export default function IdFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={IdFlagSource} />;
}
