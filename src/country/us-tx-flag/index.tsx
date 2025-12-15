import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsTxFlagSource = require('./us-tx.webp');

export default function UsTxFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsTxFlagSource} />;
}
