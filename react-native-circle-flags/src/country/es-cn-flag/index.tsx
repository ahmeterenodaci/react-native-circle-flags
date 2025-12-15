import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsCnFlagSource = require('./es-cn.webp');

export default function EsCnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EsCnFlagSource} />;
}
