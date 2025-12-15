import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NlFrFlagSource = require('./nl-fr.webp');

export default function NlFrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={NlFrFlagSource} />;
}
