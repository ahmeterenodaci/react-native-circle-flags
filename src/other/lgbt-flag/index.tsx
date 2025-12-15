import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LgbtFlagSource = require('./lgbt.webp');

export default function LgbtFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={LgbtFlagSource} />;
}
