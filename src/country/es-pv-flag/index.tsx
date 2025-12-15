import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsPvFlagSource = require('./es-pv.webp');

export default function EsPvFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EsPvFlagSource} />;
}
