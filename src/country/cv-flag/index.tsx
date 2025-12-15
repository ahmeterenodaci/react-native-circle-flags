import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CvFlagSource = require('./cv.webp');

export default function CvFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CvFlagSource} />;
}
