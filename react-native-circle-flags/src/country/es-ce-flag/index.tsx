import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsCeFlagSource = require('./es-ce.webp');

export default function EsCeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EsCeFlagSource} />;
}
