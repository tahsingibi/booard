'use client';
import React from 'react';
import { Button } from '../ui/button';
import { CrumpledPaperIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import ModalServices from '@/services/modal';
import Modal from '../ui/modal';
import Link from 'next/link';

function AboutOpenner() {
  const { createModal } = ModalServices();
  const year = new Date().getFullYear();

  return (
    <Button
      variant="secondary"
      className="flex gap-2 text-xs"
      onClick={() => createModal({ name: 'About', data: <AboutBody /> })}
    >
      <CrumpledPaperIcon /> Booard &copy; {year}
    </Button>
  );
}

function AboutBody() {
  return (
    <>
      <Modal.Title>
        <CrumpledPaperIcon className="mr-2 mb-0 w-6 h-6" /> Booard About
      </Modal.Title>
      <Modal.Body>
        <div className="prose">
          <p>
            <b>Booard</b>, kişisel notlarınızı ve görevlerinizi kaydetmek için
            kullanabileceğiniz açık kaynak kodlu bir task yönetim sistemidir.
            Esnek yapısı sayesinde istediğiniz şekilde notlarınızı ve
            görevlerinizi projelere ayırabilir, kolonlara düzenleyebilirsiniz.
          </p>
          <h4>Öne Çıkan Özellikler:</h4>
          <ul>
            <li>
              <b>Proje Tabanlı Organizasyon: </b> Notlarınızı ve görevlerinizi
              projelere göre düzenleyin.
            </li>
            <li>
              <b>Kolon Yapısı: </b>Görevlerinizi istediğiniz sırayla kolonlara
              yerleştirin ve kolonları dilediğiniz gibi özelleştirin.
            </li>
            <li>
              <b>Veri Güvenliği: </b>Booard, kullanıcı verilerini hiçbir şekilde
              sunucuda barındırmaz; tamamen cihaz üzerinde çalışır.
            </li>
            <li>
              <b>Kişisel Kullanım: </b> Ancak, bu bağımsız yapısı nedeniyle aynı
              anda birden fazla cihaz veya kullanıcı arasında senkronizasyon
              sağlayamaz.
            </li>
            <li>
              <b>İçe/Dışa Aktarım: </b>Booard ile farklı cihazlarda veya
              kullanıcılar arasında oluşturulmuş görevleri kolayca içe ve dışa
              aktarabilirsiniz.
            </li>
          </ul>
          <p>
            Bu sayede Booard, kişisel görevlerinizi ve notlarınızı organize
            etmek isteyen kullanıcılar için esnek ve güvenli bir çözüm sunar.
          </p>
          <Button asChild variant="outline" className="*:no-underline">
            <Link
              href="https://github.com/tahsingibi"
              target="_blank"
              className="decoration-0 decoration-transparent"
            >
              <GitHubLogoIcon className="mr-2" /> Github
            </Link>
          </Button>
        </div>
      </Modal.Body>
    </>
  );
}

export { AboutOpenner, AboutBody };
