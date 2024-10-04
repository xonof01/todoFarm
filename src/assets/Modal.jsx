const Modal = ({ children, openModal, setOpenModal }) => {
    const handleClickOutside = (e) => {
      if (e.target.id === "wrapper") setOpenModal(false);
    };
  
    return (
      <>
        {openModal && (
          <div id="wrapper" onClick={handleClickOutside} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
              <button onClick={() => setOpenModal(false)} className="text-white text-xl place-self-end">
                Close
              </button>
              <div className="bg-white p-2 rounded">{children}</div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;