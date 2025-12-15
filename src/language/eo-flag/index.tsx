import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EoFlagSource = require('./eo.webp');

export default function EoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EoFlagSource} />;
}
