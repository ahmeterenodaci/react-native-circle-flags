import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TvFlagSource = require('./tv.webp');

export default function TvFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TvFlagSource} />;
}
