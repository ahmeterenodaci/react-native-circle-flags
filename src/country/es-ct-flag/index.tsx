import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsCtFlagSource = require('./es-ct.webp');

export default function EsCtFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EsCtFlagSource} />;
}
