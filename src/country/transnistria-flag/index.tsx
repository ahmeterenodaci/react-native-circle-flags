import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TransnistriaFlagSource = require('./transnistria.webp');

export default function TransnistriaFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={TransnistriaFlagSource} />;
}
