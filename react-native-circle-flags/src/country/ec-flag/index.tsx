import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EcFlagSource = require('./ec.webp');

export default function EcFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EcFlagSource} />;
}
