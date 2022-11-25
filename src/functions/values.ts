export const transformBetween = (
    [fromFrame, duration],
    [fromValue, toValue],
    frame
) => {
    if (fromFrame >= frame) return fromValue;
    if (fromFrame + duration <= frame) return toValue;
    const percentage = (frame - fromFrame) / duration
    //console.log(percentage, frame)
    return fromValue + (-fromValue + toValue) * percentage
};