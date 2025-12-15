import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const YuaFlagSource = require('./yua.webp');

export default function YuaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={YuaFlagSource} />;
}
