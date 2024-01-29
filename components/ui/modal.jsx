'use client';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ModalServices from '@/services/modal';
import { Button } from './button';
import { Cross1Icon } from '@radix-ui/react-icons';

export const modalSizes = {
  sm: 'max-w-sm',
  md: 'max-w-md	',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

export default function Modal() {
  const { modals } = useSelector((state) => state.modals);
  const { closeModal } = ModalServices();

  const hasModal = !!modals?.length;

  const hiddenClass = 'opacity-0 *:opacity-0 pointer-events-none';
  const viewClass = 'backdrop-blur-lg opacity-100 *:opacity-100';
  const wrapperClass = `bg-black/20 w-dvw h-dvh box-border fixed flex items-center justify-center transition-all p-4 z-50 ${
    hasModal ? viewClass : hiddenClass
  }`;

  const modalRef = useRef();

  useEffect(() => {
    if (!!modals && modalRef.current) {
      document.addEventListener('click', (e) => {
        if (e.target.id == 'modalWrapper') closeModal();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') closeModal();
      });
    }

    return () => {
      document.removeEventListener('click', () => {});
      document.removeEventListener('keydown', () => {});
    };
  }, [modalRef.current]);

  return (
    <div className={wrapperClass} id="modalWrapper" ref={modalRef}>
      {modals?.map((modal) => (
        <Body key={modal.id} modal={modal} />
      ))}
    </div>
  );
}

export function Body({ modal }) {
  const { closeModal } = ModalServices();

  const { data, size, id } = modal;

  const modalBodyClassNames = `relative bg-white shadow relative z-50 p-4 rounded-lg w-full  ${modalSizes[size]}`;
  const buttonClassNames =
    '!p-0 absolute top-4 right-4 bg-transparent w-6 h-6 hover:bg-transparent hover:opacity-50';

  return (
    <div className={modalBodyClassNames} id={id}>
      {data && data}
      <Button
        onClick={() => closeModal(id)}
        size="icon"
        variant="ghost"
        className={buttonClassNames}
      >
        <Cross1Icon className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function Title({ children }) {
  return (
    <>
      <h3 className="flex items-center tracking-tight font-semibold text-lg">
        {children}
      </h3>
      <hr className="my-4 -mx-4 opacity-50" />
    </>
  );
}

export function Footer({ children }) {
  return (
    <>
      <hr className="my-4 -mx-4 opacity-50" />
      <div className="flex items-center justify-end">{children}</div>
    </>
  );
}

export function Content({ children }) {
  return (
    <div className="max-h-[50dvh] h-auto overflow-y-auto -m-4 p-6">
      {children}
    </div>
  );
}

Modal.Body = Content;
Modal.Title = Title;
Modal.Footer = Footer;
Modal.Size = modalSizes;
