import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TiFlagSource = require('./ti.webp');

export default function TiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TiFlagSource} />;
}
