const checkStorageIsExist = () => {
  if (typeof Storage === undefined) {
    return false;
  }
  return true;
};

export default checkStorageIsExist;
