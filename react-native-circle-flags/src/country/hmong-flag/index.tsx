import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HmongFlagSource = require('./hmong.webp');

export default function HmongFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={HmongFlagSource} />;
}
