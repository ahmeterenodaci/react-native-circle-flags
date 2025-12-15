import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TyFlagSource = require('./ty.webp');

export default function TyFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={TyFlagSource} />;
}
