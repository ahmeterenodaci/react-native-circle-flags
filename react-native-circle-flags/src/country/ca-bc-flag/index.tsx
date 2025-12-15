import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CaBcFlagSource = require('./ca-bc.webp');

export default function CaBcFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CaBcFlagSource} />;
}
