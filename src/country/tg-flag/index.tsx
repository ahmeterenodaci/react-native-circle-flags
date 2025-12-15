import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TgFlagSource = require('./tg.webp');

export default function TgFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TgFlagSource} />;
}
