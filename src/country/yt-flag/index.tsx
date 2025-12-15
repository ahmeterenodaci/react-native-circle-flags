import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const YtFlagSource = require('./yt.webp');

export default function YtFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={YtFlagSource} />;
}
