import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsArFlagSource = require('./es-ar.webp');

export default function EsArFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EsArFlagSource} />;
}
