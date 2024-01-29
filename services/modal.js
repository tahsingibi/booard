'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as ModalActions } from '@/store/actions/modal';
import { v4 as uuid } from 'uuid';

export default function ModalServices() {
  const dispatch = useDispatch();

  const { create, close, closeAll } = ModalActions;

  const createModal = ({ name = '', data = <></>, size = 'xl' }) => {
    const id = uuid();
    dispatch(create({ name, id, data, size }));
  };

  const closeModal = (id) => {
    dispatch(close(id));
  };

  const destroyModals = () => dispatch(closeAll());

  return { createModal, closeModal, destroyModals };
}
