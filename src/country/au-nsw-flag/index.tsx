import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuNswFlagSource = require('./au-nsw.webp');

export default function AuNswFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AuNswFlagSource} />;
}
