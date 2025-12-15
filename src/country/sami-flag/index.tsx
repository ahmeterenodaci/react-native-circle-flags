import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SamiFlagSource = require('./sami.webp');

export default function SamiFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SamiFlagSource} />;
}
