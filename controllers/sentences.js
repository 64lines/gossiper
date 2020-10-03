const tryCatch = (parameter, tryFunct, catchFunct) => {
  try {
    return tryFunct(parameter);
  } catch {
    return catchFunct(parameter);
  }
};

const eq = (a, b) => {
  return a === b;
};

module.exports.tryCatch = tryCatch;
module.exports.eq = eq;
