import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EcWFlagSource = require('./ec-w.webp');

export default function EcWFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EcWFlagSource} />;
}
