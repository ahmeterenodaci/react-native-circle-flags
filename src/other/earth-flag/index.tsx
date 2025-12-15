import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EarthFlagSource = require('./earth.webp');

export default function EarthFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EarthFlagSource} />;
}
