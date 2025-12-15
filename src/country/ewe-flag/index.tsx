import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EweFlagSource = require('./ewe.webp');

export default function EweFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EweFlagSource} />;
}
