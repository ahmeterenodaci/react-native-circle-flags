import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtBeFlagSource = require('./et-be.webp');

export default function EtBeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EtBeFlagSource} />;
}
