import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NatoFlagSource = require('./nato.webp');

export default function NatoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={NatoFlagSource} />;
}
