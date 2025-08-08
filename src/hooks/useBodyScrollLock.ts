"use client";

import { useCallback } from "react";

const useBodyScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.classList.add("no-scroll");
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.classList.remove("no-scroll");
  }, []);

  return { lockScroll, unlockScroll };
};

export default useBodyScrollLock;
