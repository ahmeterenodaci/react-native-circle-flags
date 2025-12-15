import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsCaFlagSource = require('./us-ca.webp');

export default function UsCaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsCaFlagSource} />;
}
