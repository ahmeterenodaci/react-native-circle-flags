import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FkFlagSource = require('./fk.webp');

export default function FkFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={FkFlagSource} />;
}
