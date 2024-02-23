import React, {useState} from 'react';

const Popup = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
      };
    
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
  return (
    <div>
       <button onClick={toggleModal} className="block px-10 py-20 mx-auto text-lg mt-100">
        Open
      </button>
      {modal && (
        <div className="fixed inset-0 w-screen h-screen">
          <div onClick={toggleModal} className="fixed inset-0 w-screen h-screen"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-relaxed bg-gray-200 py-14 px-28 rounded-md max-w-screen-md min-w-[300px]">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="absolute px-5 top-10 right-10 py-7" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
