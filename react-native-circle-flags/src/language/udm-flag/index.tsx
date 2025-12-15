import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UdmFlagSource = require('./udm.webp');

export default function UdmFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UdmFlagSource} />;
}
