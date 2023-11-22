'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const overlay = useRef(null);
  const router = useRouter();

  const onDissmiss = useCallback(() => {
    router.back();
  }, [router]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onDissmiss();
      }
    },
    [onDissmiss],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      className="max-auto fixed bottom-0 left-0 right-0 top-0 z-50 bg-black/50"
      ref={overlay}
      onClick={onDissmiss}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4">
        {children}
      </div>
    </div>
  );
};

export { Modal };
