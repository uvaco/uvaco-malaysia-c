'use client';

import { useEffect } from 'react';
import { useModal } from '@/context/ModalContext';

export default function AutoDisclaimer() {
  const { openDisclaimer } = useModal();

  useEffect(() => {
    openDisclaimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
