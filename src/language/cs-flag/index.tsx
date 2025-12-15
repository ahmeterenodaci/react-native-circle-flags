import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CsFlagSource = require('./cs.webp');

export default function CsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CsFlagSource} />;
}
