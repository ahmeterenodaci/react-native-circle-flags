import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsConfederateBattleFlagSource = require('./us-confederate_battle.webp');

export default function UsConfederateBattleFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={UsConfederateBattleFlagSource} />;
}
