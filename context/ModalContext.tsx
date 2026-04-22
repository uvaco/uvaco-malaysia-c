'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';

interface ModalContextType {
  disclaimerOpen: boolean;
  leadOpen: boolean;
  leadResource: string;
  exitOpen: boolean;
  openDisclaimer: () => void;
  closeDisclaimer: () => void;
  openLead: (resource: string) => void;
  closeLead: () => void;
  openExit: () => void;
  closeExit: () => void;
}

const ModalContext = createContext<ModalContextType>({
  disclaimerOpen: false,
  leadOpen: false,
  leadResource: '',
  exitOpen: false,
  openDisclaimer: () => {},
  closeDisclaimer: () => {},
  openLead: () => {},
  closeLead: () => {},
  openExit: () => {},
  closeExit: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadResource, setLeadResource] = useState('');
  const [exitOpen, setExitOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        disclaimerOpen,
        leadOpen,
        leadResource,
        exitOpen,
        openDisclaimer: useCallback(() => setDisclaimerOpen(true), []),
        closeDisclaimer: useCallback(() => setDisclaimerOpen(false), []),
        openLead: useCallback((resource: string) => { setLeadResource(resource); setLeadOpen(true); }, []),
        closeLead: useCallback(() => setLeadOpen(false), []),
        openExit: useCallback(() => setExitOpen(true), []),
        closeExit: useCallback(() => setExitOpen(false), []),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
