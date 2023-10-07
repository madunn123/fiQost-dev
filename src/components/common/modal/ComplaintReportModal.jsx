import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { getFromLocalStorage } from '@/utils/helper';

export default function ComplaintReportModal() {
  const [openedModal, setOpenedModal] = useState(true);
  const userWithRoomNumber = getFromLocalStorage('user');

  return (
    <Transition appear show={openedModal} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={() => setOpenedModal(!openedModal)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl p-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-row items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold leading-6 text-black popins-font"
                    >
                      Laporkan Keluhan
                    </Dialog.Title>

                    <button type="button" onClick={() => setOpenedModal(!openedModal)}>
                      <AiOutlineClose />
                    </button>
                  </div>

                  <div className="flex flex-col gap-6">
                    <label htmlFor="no-kamar" className="flex flex-col gap-2.5">
                      <span className="capitalize inter-font">nomor kamar</span>
                      <input type="text" id="no-kamar" className="p-3 border-b-4 border-slate-300 inter-font bg-slate-200" value={userWithRoomNumber?.roomNumber} disabled />
                    </label>

                    <label htmlFor="keluhan" className="flex flex-col gap-2.5">
                      <span className="capitalize inter-font">keluhan kamu</span>
                      <textarea id="keluhan" rows={5} className="w-full p-3 transition-all duration-300 border-2 rounded-md outline-none focus:outline-main-color border-slate-300 inter-font text-slate-600">
                        Contoh : Genteng bocor, keramik pecah
                      </textarea>
                    </label>
                  </div>

                  <button type="submit" className="p-3 font-semibold text-white capitalize rounded-md bg-main-color popins-font">laporkan</button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
