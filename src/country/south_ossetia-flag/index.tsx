import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SouthOssetiaFlagSource = require('./south_ossetia.webp');

export default function SouthOssetiaFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={SouthOssetiaFlagSource} />;
}
