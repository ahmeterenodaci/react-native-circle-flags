import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtGaFlagSource = require('./et-ga.webp');

export default function EtGaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EtGaFlagSource} />;
}
