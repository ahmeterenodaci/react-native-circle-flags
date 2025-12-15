import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LgbtProgressFlagSource = require('./lgbt-progress.webp');

export default function LgbtProgressFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={LgbtProgressFlagSource} />;
}
