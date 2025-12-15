import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LgbtTransgenderFlagSource = require('./lgbt-transgender.webp');

export default function LgbtTransgenderFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={LgbtTransgenderFlagSource} />;
}
