import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IloFlagSource = require('./ilo.webp');

export default function IloFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={IloFlagSource} />;
}
