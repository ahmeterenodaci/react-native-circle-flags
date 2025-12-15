import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ErFlagSource = require('./er.webp');

export default function ErFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={ErFlagSource} />;
}
