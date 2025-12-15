import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsMlFlagSource = require('./es-ml.webp');

export default function EsMlFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EsMlFlagSource} />;
}
