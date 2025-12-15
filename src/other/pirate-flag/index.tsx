import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PirateFlagSource = require('./pirate.webp');

export default function PirateFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PirateFlagSource} />;
}
