import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsMxFlagSource = require('./es-mx.webp');

export default function EsMxFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EsMxFlagSource} />;
}
