import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtFlagSource = require('./et.webp');

export default function EtFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EtFlagSource} />;
}
